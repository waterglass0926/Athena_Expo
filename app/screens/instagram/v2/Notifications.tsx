import React from 'react';
import { View, Text } from 'react-native';

import Components from '@/components/instagram/v2';

export const Notifications = () => {
  return (
    <View>
      <Components.Header title='Activity' />
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ color: '#888', textAlign: 'center', fontSize: 17 }}>
          No recent activity
        </Text>
      </View>
    </View>
  );
};