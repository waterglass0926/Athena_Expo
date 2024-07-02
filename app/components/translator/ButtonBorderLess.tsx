import React, { useState } from 'react';
import { Pressable, PressableProps } from 'react-native';

export const ButtonBorderLess: React.FC<PressableProps> = props => {
  const [radius, setRadius] = useState<number>();

  return (
    <Pressable
      onLayout={e =>
        setRadius(
          Math.max(e.nativeEvent.layout.height, e.nativeEvent.layout.width) / 2,
        )
      }
      android_ripple={{ borderless: true, color: '#ccc', radius }}
      {...props}
    />
  );
};