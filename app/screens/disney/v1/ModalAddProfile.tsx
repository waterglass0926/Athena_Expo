import * as React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native';

import Components from '@/components/disney/v1';
import Constants from '@/constants';

export class ModalAddProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forKidsValue: false,
      text: ''
    };

    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  };

  handleSwitchChange(value) {
    // warn on switch off from kids settings...
    if (value === false) {
      Alert.alert(
        'This profile will now allow access to TV shows and movies of all maturity levels.',
        '',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    };

    this.setState({
      forKidsValue: value
    });
  };

  render() {
    const { forKidsValue, text } = this.state;

    return (
      <View style={[Constants.STYLES.DISNEY.V1.container, { backgroundColor: Constants.COLORS.DISNEY.V1.black }]}>
        <Components.HeaderManage
          backText='Cancel'
          save
          saveActive={text !== ''}
          title='Create Profile'
          navigation={this.props.navigation}
        />

        <View style={styles.container}>
          <Image source={Constants.IAMGES.DISNEY.V1.mask} style={styles.avatar} />
          <Text style={styles.text}>CHANGE</Text>

          <TextInput
            autoCapitalize='none'
            autoFocus
            keyboardAppearance='dark'
            onChangeText={(input) => this.setState({ text: input })}
            selectionColor={Constants.COLORS.DISNEY.V1.storageBlue}
            style={styles.input}
            value={text}
          />

          <View style={styles.containerSwitch}>
            <Text style={styles.switchLabel}>For Kids</Text>
            <Switch
              onValueChange={(val) => this.handleSwitchChange(val)}
              value={forKidsValue}
            />
          </View>
        </View>
      </View>
    );
  };
};

const BLOCK_SIZE = 108;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 60
  },
  avatar: {
    height: BLOCK_SIZE,
    resizeMode: 'contain',
    width: BLOCK_SIZE
  },
  text: {
    color: Constants.COLORS.DISNEY.V1.white,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16,
    marginBottom: 24,
    marginTop: 8,
    textAlign: 'center'
  },
  input: {
    borderColor: Constants.COLORS.DISNEY.V1.white,
    borderWidth: 1,
    color: Constants.COLORS.DISNEY.V1.white,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 12,
    width: 260
  },
  containerSwitch: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16
  },
  switchLabel: {
    color: Constants.COLORS.DISNEY.V1.white,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16,
    marginRight: 8,
    textTransform: 'uppercase'
  }
});
