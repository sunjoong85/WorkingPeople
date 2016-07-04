'use strict';
import React, { Component } from 'react';
import {
    Dimensions,
    Navigator,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from './navigationBar';
//import PostList from '../post/postList';
import PostListView from '../post/postListView';
import dimension from '../../common/dimension';
import LeftMenu from '../leftMenu/leftMenu'


const SCREEN_WIDTH = dimension.screenWidth;
const SCREEN_HEIGHT = dimension.screenHeight;


class NavigationLayout extends React.Component {

    constructor(props) {
        super(props);

  /*      console.log("###")
        console.log(this.props);
        console.log(this.props.navigator);*/
        //this.sceneChanged = props.sceneChanged;
    }

    componentWillMount() {
    };

    componentDidMount() {
    };

    componentWillUnmount() {
        this._listeners && this._listeners.forEach(listener => listener.remove());
    };

    notifySceneChanged(index){
        //this.sceneChanged(index);
        //smile moment
        if(this.navigationBar){
            //it is called before navigationBar navBar is set
            this.navigationBar.setMode(index);
        }
    }

    setNavigatorRef(navigator) {
        this.navigator = navigator;
        var callback = (event) => {
            console.log(
                `NavigationBarSample : event ${event.type}`,
                {
                    route: JSON.stringify(event.data.route),
                    target: event.target,
                    type: event.type,
                }
            );
        };

        // Observe focus change events from this component.
        this._listeners = [
            navigator.navigationContext.addListener('willfocus', callback),
            navigator.navigationContext.addListener('didfocus', callback),
        ];

    }


    requestSceneChange(route, arg) {
        //console.log(route);
        //console.log(arg);
        //console.log(this.navigator);
        //console.log("@@ requestSceneChange", route);
        this.navigator.push(route);
    }

    renderPostView() {
        return (
                <ScrollView style={styles.scene}>
                    <Text>Post 입니다 날씨가 참 좋네요 ^^ </Text>
                </ScrollView>
        )
    }

    renderMainView() {
        return (
            <View style={styles.scene}>
                <ScrollView horizontal={true} style={{height:30}}>
                    <Text>싱글 라운지 </Text>
                    <Text>서울 라운지 </Text>
                    <Text>판교 라운지 </Text>
                    <Text>IT 라운지 </Text>
                    <Text>디자이너 라운지</Text>
                </ScrollView>
                <PostListView requestSceneChange={this.requestSceneChange.bind(this)}></PostListView>
            </View>
        )
    }

    renderNewCommerView() {

    }

    renderScene(route, navigator) {
        //console.log('!!!!!!! render scene');

        this.notifySceneChanged(route.index);

        if (route.index == '0') {
            return this.renderMainView();
        } else if (route.index == '1') {
            return this.renderPostView();
        }

    }

    render() {
        return (
            <View style={styles.container}>

                <Navigator
                    ref={(nav)=>{this.navigator = nav}}
                    debugOverlay={false}
                    style={styles.appContainer}
                    initialRoute={{name:'mainView', index:'0'}}
                    renderScene={this.renderScene.bind(this)}
                >
                </Navigator>

                <NavigationBar ref={(navBar)=>{this.navigationBar = navBar;}}
                    backwardButtonPressed={()=>{this.navigator.pop();}}
                    openLeftMenu={this.props.openLeftMenu}
                >
                </NavigationBar>


            </View>
        );
    }
}
;
/*
 navigationBar={
 <NavigationBar
 ref={(nb)=>{this.navigationBar = nb;  console.log("%%%", nb)}}

 >
 </NavigationBar>
 }
 */
var screenFullWidth = Dimensions.get('window').width; //full width



var styles = StyleSheet.create({
    appContainer: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#F5FCFF'
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
    },

    scene: {
        //flex: 1,
        marginTop : 65,
        height :SCREEN_HEIGHT,
        backgroundColor: '#EAEAEA',
    },
});

module.exports = NavigationLayout;