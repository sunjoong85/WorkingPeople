/**
 * @author Sunjoong Kim (sunjoong85@gmail.com)
 */
'user strict'
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


import Drawer from 'react-native-drawer'
import Button from 'react-native-button';
import NavigationBar from '../topNavigationBar/navigationBar';

var drawerStyles = StyleSheet.create({
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3}
})

class ControlPanel extends Component{
    render(){
        return (
            <View>
                <Text>this is a control panel</Text>
            </View>

        )
    }
}

class LeftMenu extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render () {
        return (
            <Drawer
                type="overlay"
                tapToClose={true}

                ref={(ref) => this._drawer = ref}
                content={<ControlPanel />}
            >



            </Drawer>
        )
    }
}
//<Button style={{marginTop:100}} onPress={()=>{this.openControlPanel()}}>Click</Button>s
//  <NavigationBar></NavigationBar>


module.exports = LeftMenu;
