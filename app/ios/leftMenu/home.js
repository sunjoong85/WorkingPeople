/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';


//import Button from 'react-native-button';
import ViewPager from 'react-native-viewpager';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*dataSource: new ListView.DataSource({
             rowHasChanged: (row1, row2) => row1 !== row2,
             }),
             loaded: false,*/
        };
    }

    componentDidMount() {
        //this.fetchData();
    }

    render() {

        return (
            <View style={styles.tabContent}>
                <Text style={styles.tabText}>최근검색</Text>
                <Text style={styles.tabText}>추천 - TODO user에 따른 suggestion</Text>
                <Text style={styles.tabText}>새로운 클래스</Text>
                <ViewPager></ViewPager>
                <Text style={styles.tabText}>인기 클래스</Text>

                <Image source={require('./psh.png')}/>


            </View>
        );
    }
}

/*
 <ViewPager
 dataSource={this.state.dataSource}
 renderPage={this._renderPage}/>*/



var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'green',
        margin: 20,
    },
    button: {
        padding: 10
    }
});

module.exports = Home;