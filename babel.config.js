module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './assets',
          '@utils': './src/utils',
          '@components': './src/components',
          '@config': './src/config',
          '@layouts': './src/layouts',
        },
      },
    ],
  ],
};
