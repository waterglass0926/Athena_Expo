import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  RefreshControl,
  LayoutAnimation,
  Animated
} from 'react-native';
import * as Font from 'expo-font'; // Update to use 'expo-font'
import { observer } from 'mobx-react';
import { configure } from 'mobx'; // Import configure from mobx

import Components from '@/components/todolist';
import store from '@/stores/todolist/todolist';

const { width, height } = Dimensions.get('window');

const todoAnim = {
  duration: 500,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY
  }
};

configure({
  enforceActions: 'always' // Ensure MobX actions are enforced
});

@observer
export default class TodoList extends Component { // Added class name for better debugging

  async componentDidMount() { // Use componentDidMount instead of deprecated componentWillMount
    await Font.loadAsync({
      'lato-regular': require('@/assets/fonts/todolist/Lato-Regular.ttf')
    });

    store.loaded = true;
  };

  componentDidUpdate() { // Use componentDidUpdate instead of deprecated componentWillUpdate
    LayoutAnimation.easeInEaseOut();
  };

  render() {
    if (store.loaded) return <View />;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Components.P style={styles.navbarTitle}>Todos</Components.P>
        </View>

        <View style={{ flex: 1 }}>
          <Image style={styles.bg} source={require('@/assets/images/todolist/bg.jpg')} />
          <Animated.View
            style={{
              flex: 1,
              opacity: store.detailAnim.interpolate({
                inputRange: [0, width],
                outputRange: [1, 0.75]
              }),
              transform: [
                {
                  scale: store.detailAnim.interpolate({
                    inputRange: [0, width],
                    outputRange: [1, 0.95]
                  })
                }
              ]
            }}
          >
            <ScrollView
              style={styles.content}
              refreshControl={
                <RefreshControl
                  refreshing={store.refreshing}
                  onRefresh={() => store.refresh()}
                  tintColor={'#fff'}
                />
              }
              keyboardDismissMode={'on-drag'}
              keyboardShouldPersistTaps='always'
              scrollEnabled={store.scrollable}
              onScroll={() => store.resetOpenId()}
              scrollEventThrottle={200}
            >
              <Components.TodoForm />

              <View style={{ flexDirection: 'column-reverse' }}>
                {store.openTodos.map(todo => (
                  <Components.Todo key={todo.id} todo={todo} />
                ))}
              </View>

              {this.renderBtn()}
              {this.renderCompletedTodos()}
            </ScrollView>
          </Animated.View>
        </View>

        <Components.TabDropdown />
        <Components.TabBar />

        <Components.TodoDetail />
      </View>
    );
  }

  renderBtn() {
    if (store.completedTodos.length <= 0) return null;

    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={'rgba(0,0,0,0.4)'}
        style={styles.btn}
        onPress={() => store.toggleCompletedTodos()}
      >
        <Text style={styles.btnText}>
          {store.completedVisible ? 'HIDE' : 'SHOW'} COMPLETED TO-DOS
        </Text>
      </TouchableHighlight>
    );
  }

  renderCompletedTodos() {
    if (!store.completedVisible) return null;

    return (
      <View style={{ flexDirection: 'column-reverse' }}>
        {store.completedTodos.map(todo => <Components.Todo key={todo.id} todo={todo} />)}
      </View>
    );
  }
}

const navbarHeight = 80;

const styles = StyleSheet.create({
  bg: {
    width,
    height: height - navbarHeight - 49,
    resizeMode: 'cover',
    backgroundColor: '#eee',
    position: 'absolute'
  },
  navbar: {
    height: navbarHeight,
    backgroundColor: '#588d64',
    paddingTop: 20,
    justifyContent: 'center'
  },
  navbarTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 10
  },
  btn: {
    alignSelf: 'center',
    marginVertical: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(88,141,100,0.8)',
    borderRadius: 2
  },
  btnText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600'
  }
});
