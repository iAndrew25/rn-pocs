/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/main';
import {name as appName} from './app.json';
import './src/config/i18n';

AppRegistry.registerComponent(appName, () => App);
