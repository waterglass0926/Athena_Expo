const Animated = require('react-native').Animated;
const PanResponder = require('react-native').PanResponder;
const I18nManager = require('react-native').I18nManager;
const React = require('react');
const StyleSheet = require('react-native').StyleSheet;
const TimerMixin = require('react-timer-mixin');
const View = require('react-native').View;
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

const emptyFunction = require('fbjs/lib/emptyFunction');

const IS_RTL = I18nManager.isRTL;

// NOTE: Eventually convert these consts to an input object of configurations

// Position of the left of the swipable item when closed
const CLOSED_LEFT_POSITION = 0;
// Minimum swipe distance before we recognize it as such
const HORIZONTAL_SWIPE_DISTANCE_THRESHOLD = 10;
// Minimum swipe speed before we fully animate the user's action (open/close)
const HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD = 0.25;
// Factor to divide by to get slow speed; i.e. 4 means 1/4 of full speed
const SLOW_SPEED_SWIPE_FACTOR = 4;
// Time, in milliseconds, of how long the animated swipe should be
const SWIPE_DURATION = 300;

/**
 * On SwipeableListView mount, the 1st item will bounce to show users it's
 * possible to swipe
 */
const ON_MOUNT_BOUNCE_DELAY = 700;
const ON_MOUNT_BOUNCE_DURATION = 400;

// Distance left of closed position to bounce back when right-swiping from closed
const RIGHT_SWIPE_BOUNCE_BACK_DISTANCE = 30;
const RIGHT_SWIPE_BOUNCE_BACK_DURATION = 300;
/**
 * Max distance of right swipe to allow (right swipes do functionally nothing).
 * Must be multiplied by SLOW_SPEED_SWIPE_FACTOR because gestureState.dx tracks
 * how far the finger swipes, and not the actual animation distance.
 */
const RIGHT_SWIPE_THRESHOLD = 30 * SLOW_SPEED_SWIPE_FACTOR;

/**
 * Creates a swipable row that allows taps on the main item and a custom View
 * on the item hidden behind the row. Typically this should be used in
 * conjunction with SwipeableListView for additional functionality, but can be
 * used in a normal ListView. See the renderRow for SwipeableListView to see how
 * to use this component separately.
 */
const SwipeableRow = createReactClass({
  _panResponder: {},
  _previousLeft: CLOSED_LEFT_POSITION,

  mixins: [TimerMixin],

  propTypes: {
    children: PropTypes.any,
    isOpen: PropTypes.bool,
    maxSwipeDistance: PropTypes.number.isRequired,
    onOpen: PropTypes.func.isRequired,
    onSwipeEnd: PropTypes.func.isRequired,
    onSwipeStart: PropTypes.func.isRequired,
    // Should bounce the row on mount
    shouldBounceOnMount: PropTypes.bool,
    /**
     * A ReactElement that is unveiled when the user swipes
     */
    slideoutView: PropTypes.node.isRequired,
    /**
     * The minimum swipe distance required before fully animating the swipe. If
     * the user swipes less than this distance, the item will return to its
     * previous (open/close) position.
     */
    swipeThreshold: PropTypes.number.isRequired
  },

  getInitialState() {
    return {
      currentLeft: new Animated.Value(this._previousLeft),
      /**
       * In order to render component A beneath component B, A must be rendered
       * before B. However, this will cause 'flickering', aka we see A briefly
       * then B. To counter this, _isSwipeableViewRendered flag is used to set
       * component A to be transparent until component B is loaded.
       */
      isSwipeableViewRendered: false,
      rowHeight: null
    };
  },

  getDefaultProps() {
    return {
      isOpen: false,
      maxSwipeDistance: 0,
      onOpen: emptyFunction,
      onSwipeEnd: emptyFunction,
      onSwipeStart: emptyFunction,
      swipeThreshold: 30
    };
  },

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this
        ._handleMoveShouldSetPanResponderCapture,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminationRequest: this._onPanResponderTerminationRequest,
      onPanResponderTerminate: this._handlePanResponderEnd
    });
  },

  componentDidMount() {
    if (this.props.shouldBounceOnMount) {
      /**
       * Do the on mount bounce after a delay because if we animate when other
       * components are loading, the animation will be laggy
       */
      this.setTimeout(() => {
        this._animateBounceBack(ON_MOUNT_BOUNCE_DURATION);
      }, ON_MOUNT_BOUNCE_DELAY);
    }
  },

  componentWillReceiveProps(nextProps) {
    /**
     * We do not need an 'animateOpen(noCallback)' because this animation is
     * handled internally by this component.
     */
    if (this.props.isOpen && !nextProps.isOpen) {
      this._animateToClosedPosition();
    }
  },

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldBounceOnMount && !nextProps.shouldBounceOnMount) {
      // No need to rerender if SwipeableListView is disabling the bounce flag
      return false;
    }

    return true;
  },

  render() {
    // The view hidden behind the main view
    let slideOutView;
    if (this.state.isSwipeableViewRendered) {
      slideOutView = (
        <Animated.View
          style={[
            styles.slideOutContainer,
            {
              height: this.state.rowHeight,
              opacity: this.state.currentLeft.interpolate({
                inputRange: [-this.props.maxSwipeDistance, 0],
                outputRange: [1, 0]
              }),
              transform: [
                {
                  translateX: this.state.currentLeft.interpolate({
                    inputRange: [-1000, -this.props.maxSwipeDistance, 0],
                    outputRange: [-100, 0, this.props.maxSwipeDistance]
                  })
                }
              ]
            }
          ]}
        >
          {this.props.slideoutView}
        </Animated.View>
      );
    }

    // The swipeable item
    const swipeableView = (
      <Animated.View
        onLayout={this._onSwipeableViewLayout}
        style={[
          styles.swipeableContainer,
          {
            transform: [
              {
                translateX: this.state.currentLeft.interpolate({
                  inputRange: [-1000, -this.props.maxSwipeDistance, 0],
                  outputRange: [-500, -this.props.maxSwipeDistance, 0]
                })
              }
            ]
          }
        ]}
      >
        {this.props.children}
      </Animated.View>
    );

    return (
      <View {...this._panResponder.panHandlers}>
        {slideOutView}
        {swipeableView}
      </View>
    );
  },

  _onSwipeableViewLayout(event) {
    this.setState({
      isSwipeableViewRendered: true,
      rowHeight: event.nativeEvent.layout.height
    });
  },

  _handleMoveShouldSetPanResponderCapture(
    event,
    gestureState
  ) {
    // Decides whether a swipe is responded to by this component or its child
    return gestureState.dy < 10 && this._isValidSwipe(gestureState);
  },

  _handlePanResponderGrant(event, gestureState) {
    this.state.currentLeft.setOffset(this.state.currentLeft._value);
    this.state.currentLeft.setValue(0);
    this.props.onSwipeStart();
  },

  _handlePanResponderMove(event, gestureState) {
    if (this._isSwipingExcessivelyRightFromClosedPosition(gestureState)) {
      return;
    }

    // this.props.onSwipeStart();

    // if (this._isSwipingRightFromClosed(gestureState)) {
    //   return this._swipeSlowSpeed(gestureState);
    // } else {
    //   this._swipeFullSpeed(gestureState);
    // }
    this._swipeFullSpeed(gestureState);
  },

  _isSwipingRightFromClosed(gestureState) {
    const gestureStateDx = IS_RTL ? -gestureState.dx : gestureState.dx;
    return this._previousLeft === CLOSED_LEFT_POSITION && gestureStateDx > 0;
  },

  _swipeFullSpeed(gestureState) {
    this.state.currentLeft.setValue(gestureState.dx);
  },

  _swipeSlowSpeed(gestureState) {
    this.state.currentLeft.setValue(gestureState.dx / SLOW_SPEED_SWIPE_FACTOR);
  },

  _isSwipingExcessivelyRightFromClosedPosition(gestureState) {
    /**
     * We want to allow a BIT of right swipe, to allow users to know that
     * swiping is available, but swiping right does not do anything
     * functionally.
     */
    const gestureStateDx = IS_RTL ? -gestureState.dx : gestureState.dx;
    return (
      this._isSwipingRightFromClosed(gestureState) &&
      gestureStateDx > RIGHT_SWIPE_THRESHOLD
    );
  },

  _onPanResponderTerminationRequest(
    event,
    gestureState
  ) {
    return false;
  },

  _animateTo(
    toValue,
    duration = SWIPE_DURATION,
    callback = emptyFunction
  ) {
    Animated.timing(this.state.currentLeft, {
      duration,
      toValue,
      useNativeDriver: false
    }).start(() => {
      this._previousLeft = toValue;
      callback();
    });
  },

  _animateToOpenPosition() {
    const maxSwipeDistance = IS_RTL
      ? -this.props.maxSwipeDistance
      : this.props.maxSwipeDistance;
    this._animateTo(-maxSwipeDistance);
  },

  _animateToOpenPositionWith(speed, distMoved) {
    /**
     * Ensure the speed is at least the set speed threshold to prevent a slow
     * swiping animation
     */
    speed =
      speed > HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD
        ? speed
        : HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD;
    /**
     * Calculate the duration the row should take to swipe the remaining distance
     * at the same speed the user swiped (or the speed threshold)
     */
    const duration = Math.abs(
      (this.props.maxSwipeDistance - Math.abs(distMoved)) / speed
    );
    const maxSwipeDistance = IS_RTL
      ? -this.props.maxSwipeDistance
      : this.props.maxSwipeDistance;
    this._animateTo(-maxSwipeDistance, duration);
  },

  _animateToClosedPosition(duration = SWIPE_DURATION) {
    this._animateTo(CLOSED_LEFT_POSITION, duration);
  },

  _animateToClosedPositionDuringBounce() {
    this._animateToClosedPosition(RIGHT_SWIPE_BOUNCE_BACK_DURATION);
  },

  _animateBounceBack(duration) {
    /**
     * When swiping right, we want to bounce back past closed position on release
     * so users know they should swipe right to get content.
     */
    const swipeBounceBackDistance = IS_RTL
      ? -RIGHT_SWIPE_BOUNCE_BACK_DISTANCE
      : RIGHT_SWIPE_BOUNCE_BACK_DISTANCE;
    this._animateTo(
      -swipeBounceBackDistance,
      duration,
      this._animateToClosedPositionDuringBounce
    );
  },

  // Ignore swipes due to user's finger moving slightly when tapping
  _isValidSwipe(gestureState) {
    return Math.abs(gestureState.dx) > HORIZONTAL_SWIPE_DISTANCE_THRESHOLD;
  },

  _shouldAnimateRemainder(gestureState) {
    /**
     * If user has swiped past a certain distance, animate the rest of the way
     * if they let go
     */
    return (
      Math.abs(gestureState.dx) > this.props.swipeThreshold ||
      gestureState.vx > HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD
    );
  },

  _handlePanResponderEnd(event, gestureState) {
    this.state.currentLeft.flattenOffset();

    const horizontalDistance = IS_RTL ? -gestureState.dx : gestureState.dx;
    if (this._isSwipingRightFromClosed(gestureState)) {
      this.props.onOpen();
      this._animateToClosedPosition(RIGHT_SWIPE_BOUNCE_BACK_DURATION);
    } else if (this._shouldAnimateRemainder(gestureState)) {
      if (horizontalDistance < 0) {
        // Swiped left
        this.props.onOpen();
        this._animateToOpenPositionWith(gestureState.vx, horizontalDistance);
      } else {
        // Swiped right
        this._animateToClosedPosition();
      }
    } else {
      if (this._previousLeft === CLOSED_LEFT_POSITION) {
        this._animateToClosedPosition();
      } else {
        this._animateToOpenPosition();
      }
    }

    this.props.onSwipeEnd();
  }
});

const styles = StyleSheet.create({
  slideOutContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  swipeableContainer: {
    flex: 1
  }
});

module.exports = SwipeableRow;
