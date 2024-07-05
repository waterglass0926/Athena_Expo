import * as React from 'react';
import { Surface, Title, useTheme } from 'react-native-paper';

import { ImageBackground, StyleSheet, View } from 'react-native';

import { useQuote } from '@/hooks/senerity/useQuote';

const QuoteCard = () => {
  const { quote } = useQuote();
  const { dark, colors } = useTheme();
  const backgroundImage = `https://source.unsplash.com/random/?${dark ? 'black' : 'white'}`;

  if (!quote) return null;

  return (
    <Surface style={styles.container}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        imageStyle={{ opacity: 0.4, borderRadius: 12 }}
        style={styles.backgroundImageContainer}
        blurRadius={1}>
        <View style={styles.quoteContainer}>
          <View>
            <Title style={{ fontFamily: 'Nunito-Italic', textAlign: 'center' }}>
              {quote?.quote}
            </Title>
            {quote?.author && (
              <Title
                style={{
                  fontFamily: 'Nunito-Italic',
                  textAlign: 'center',
                }}>{`~ ${quote?.author}`}</Title>
            )}
            {quote?.caption && (
              <Title
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  textAlign: 'center',
                  marginTop: 8,
                  color: colors.disabled,
                }}>
                {quote?.caption}
              </Title>
            )}
          </View>
        </View>
      </ImageBackground>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 12, elevation: 8, borderRadius: 12 },
  backgroundImageContainer: {
    flex: 1,
    minHeight: 200,
    width: '100%',
  },
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 12,
  },
});

export default React.memo(QuoteCard);