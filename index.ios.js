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

import Navigator from './app/ios/topNavigationBar/navigationLayout';
//import LeftMenu from './app/ios/leftMenu/leftMenu'
import Drawer from 'react-native-drawer'

/*
 TODO 공통 스타일
 TODO

 */


class ControlPanel extends Component{
    render(){
        return (
            <View style={{backgroundColor:'lightblue', height:700}}>
                <Text style={{marginTop:100}}>this is a left drawer menu</Text>
            </View>

        )
    }
}


class WorkingPeople extends Component {
    closeLeftMenu() {
        this._drawer.close()
    };
    openLeftMenu() {
        this._drawer.open()
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2C3D42"
                    barStyle="light-content"
                />

                <Drawer
                    type="overlay"
                    tapToClose={true}
                    openDrawerOffset={0.5}
                    ref={(ref) => this._drawer = ref}
                    content={<ControlPanel />}
                >


                    <Navigator
                        openLeftMenu={this.openLeftMenu.bind(this)}
                        closeLeftMenu={this.closeLeftMenu.bind(this)}
                     ></Navigator>

                </Drawer>

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
