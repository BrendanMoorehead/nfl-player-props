import {View, Text} from 'react-native';
import Navbar from './navigation/MainContainer';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';

AppRegistry.registerComponent(appName, () => App);