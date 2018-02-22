/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 // Platform,
  Text,
  View
} from 'react-native';
import Home from './src/views/Home';
import CameraTest from './src/views/CameraTest';
import GalleryRoll from './src/views/GalleryRoll';
import Files from './src/views/Files';
import Gps from './src/views/Gps';
import Notifications from './src/views/Notifications';
import Printer from './src/views/Printer';
import Webview from './src/views/Webview';
import {StackNavigator} from 'react-navigation';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const RootStack = StackNavigator(
    {
        Home: {screen: Home},
        CameraTest: {screen: CameraTest},
        GalleryRoll: {screen: GalleryRoll},
        Files: {screen: Files},
        Gps: {screen: Gps},
        Notifications: {screen: Notifications},
        Printer: {screen: Printer},
        Webview: {screen: Webview},

    },
    {
        initialRouteName: 'Home'
    }
);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return <RootStack />
    }
}
