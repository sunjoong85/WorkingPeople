/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import Navigator from './app/ios/navigator/navigator';

/*
 TODO 공통 스타일
 TODO

 */


class WorkingPeople extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2C3D42"
                    barStyle="light-content"
                />


                <Navigator></Navigator>

            </View>
        );
    }
}
// <NavigationBar ref={(navBar)=>{this.navigationBar = navBar;}}></NavigationBar>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('WorkingPeople', () => WorkingPeople);
