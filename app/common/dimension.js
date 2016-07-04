/**
 * @author Sunjoong Kim (sunjoong85@gmail.com)
 */

'use strict';
import {
    Dimensions,
} from 'react-native';

module.exports.screenSize = {
    screenWidth : Dimensions.get('window').width,
    screenHeight : Dimensions.get('window').height
}