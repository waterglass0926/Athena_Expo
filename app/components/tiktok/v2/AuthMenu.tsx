import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export interface AuthMenuProps {
  authPage: number;
  menuMessage: string;
  setAuthPage: Dispatch<SetStateAction<0 | 1>>;
  setDetailsPage: Dispatch<SetStateAction<boolean>>;
}

/**
 * Function that renders a component that renders a menu to allow
 * the user to choose the auth provider and if the method should be
 * signin or signup.
 *
 * @param props passed to component
 * @param props.authPage if 0 it is in the signin state
 * if 1 is in the signup state
 * @param props.setAuthPage setter for the authPage var (0 or 1)
 * @param props.setDetailsPage setter for the variable that chooses
 * the type of page, if true show AuthMenu else show AuthDetails
 * @returns Component
 */
export function AuthMenu({
  authPage,
  menuMessage,
  setAuthPage,
  setDetailsPage,
}: AuthMenuProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.headerText}>
          {authPage == 0 ? 'Sign In' : 'Sign Up'}
        </Text>
        {menuMessage && <Text style={styles.menuMessage}>{menuMessage}</Text>}
        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => setDetailsPage(true)}
        >
          <Feather name='user' size={24} color='black' />
          <Text style={styles.providerButtonText}>Use Email</Text>
          <View />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.containerBottomButton}
        onPress={() => (authPage == 0 ? setAuthPage(1) : setAuthPage(0))}
      >
        {authPage == 0 ? (
          <Text>
            Don't have an account?{' '}
            <Text style={styles.bottomButtonText}>Sign Up</Text>
          </Text>
        ) : (
          <Text>
            Already have an account?{' '}
            <Text style={styles.bottomButtonText}>Sign In</Text>
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMain: {
    padding: 30,
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 25,
    color: 'darkslategray',
    textAlign: 'center',
  },
  providerButton: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  providerButtonText: {
    paddingRight: 20,
  },
  containerBottomButton: {
    backgroundColor: 'ghostwhite',
    padding: 20,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  bottomButtonText: {
    fontWeight: 'bold',
    color: 'red',
  },
  menuMessage: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
