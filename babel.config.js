module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
          alias: {
            '@/app': './app',
            '@/assets': './app/assets',
            '@/components': './app/components',
            '@/constants': './app/constants',
            '@/contexts': './app/contexts',
            '@/hooks': './app/hooks',
            '@/routes': './app/routes',
            '@/screens': './app/screens',
            '@/services': './app/services',
            '@/apis': './app/services/apis',
            '@/stores': './app/stores',
            '@/styles': './app/styles',
            '@/types': './app/types',
            '@/utils': './app/utils',
          },
        },
      ],
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
