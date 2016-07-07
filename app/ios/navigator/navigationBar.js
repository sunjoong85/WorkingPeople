'use strict';
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';

class NavigationBar extends React.Component{

    constructor(props){
        super(props);
        //this.backwardButtonPressed = props.backwardButtonPressed;
        this.state={
            type:'0'
        }

    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillUnmount () {
    }


    setMode(type) {
        //TODO refactoring. coded to avoid change component's state while other component is still on rendering process
        this.setState({
            type:type
        })
    }

    renderLeftButton() {
        console.log("render left button" , this.state.type);
        switch (this.state.type) {
            case '0':
                return(
                    <Button containerStyle={styles.navigationBarHamburger} onPress={this.onHamburgerButtonPressed.bind(this)}>
                        <Icon name="navicon" style={[styles.navigationBarText]}/>
                    </Button>
                )
                break;
            case '1':
                return(
                    <Button containerStyle={styles.navigationBarLeft} onPress={this.onBackwardButtonPressed.bind(this)}>
                        <Icon name="chevron-left" style={[styles.navigationBarText]}/>
                    </Button>
                )
                break;
        }
    }
    renderMessageButton() {

    }

    renderNoticeButton(){

    }

    renderTitle(title) {
        return(
            <Text style={[styles.navigationBarText, styles.navigationBarTitle]}>WorkingPeople</Text>
        )
    }


    onBackwardButtonPressed() {
        this.props.moveBackward();
    }

    onHamburgerButtonPressed() {
        //this._drawer.open();
        this.props.openLeftMenu();
    }

    render() {
        return (
                <View style={styles.navigationBar}>

                    {this.renderLeftButton()}

                    {this.renderTitle()}

                    <Button containerStyle={styles.navigationBarMessage}>
                        <Icon name="envelope" style={styles.navigationBarText}/>
                    </Button>

                    <Button containerStyle={styles.navigationBarNotice}>
                        <Icon name="bell" style={styles.navigationBarText}/>
                    </Button>


                </View>
        );
    }
};

/*
 var SCREEN_WIDTH = Dimensions.get('window').width;
 var SCREEN_HEIGHT = Dimensions.get('window').height;
 */
var screenFullWidth = Dimensions.get('window').width; //full width

var styles = StyleSheet.create({

    navigationBar: {
        //flex: 1,
        flexDirection: 'row',

        width: screenFullWidth,
        height: 60,
        position: 'absolute',
        left : 0,
        top : 0,

        paddingTop:30,
        paddingBottom:5,

        backgroundColor:'#2C3D42'
    },


    navigationBarText: {
        fontSize: 23,
        color: 'white'
    },

    navigationBarHamburger: {
        flex:1,
        paddingLeft: 10
    },

    navigationBarLeft: {
        flex:1,
        paddingLeft: 10
    },

    navigationBarTitle: {
        flex:7,
        fontSize: 17
    },

    navigationBarMessage: {
        flex:1
    },

    navigationBarNotice: {
        flex:1
    }

});

module.exports = NavigationBar;