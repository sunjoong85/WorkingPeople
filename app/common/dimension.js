/**
 * @author Sunjoong Kim (sunjoong85@gmail.com)
 */

'use strict';
import {
    Dimensions,
    StatusBar
} from 'react-native';

module.exports.screenSize = {
    screenWidth : Dimensions.get('window').width,
    screenHeight : Dimensions.get('window').height
}

module.exports.statusBarHeight = StatusBar.currentHeight;