import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Components from '@/components/tiktok/v2';

/**
 * Function that renders a component responsible for being the
 * authentication screen. This is simply a placeholder for
 * the components that actually contains functionalities
 * @returns Component
 */
export function Auth() {
  const [authPage, setAuthPage] = useState<0 | 1>(0);
  const [detailsPage, setDetailsPage] = useState(false);
  const [menuMessage, setMenuMessage] = useState('');

  return (
    <View style={styles.container}>
      {detailsPage ? (
        <Components.AuthDetails
          authPage={authPage}
          setAuthPage={setAuthPage}
          setMenuMessage={setMenuMessage}
          setDetailsPage={setDetailsPage}
        />
      ) : (
        <Components.AuthMenu
          authPage={authPage}
          menuMessage={menuMessage}
          setAuthPage={setAuthPage}
          setDetailsPage={setDetailsPage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});