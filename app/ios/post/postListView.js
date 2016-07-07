'use strict';


'use strict';

import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    RefreshControl,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';


var styles = StyleSheet.create({
    row: {
        borderColor: 'grey',
        borderBottomWidth: 1,

        padding: 20,
        backgroundColor: 'white',
        //margin: 1,
    },
    text: {
        alignSelf: 'center',
        color: 'black',
    },
    scrollview: {
        height: 700
    },
});


class Row extends Component {
    constructor(props){
        super(props);
    }

    _onClick() {
        this.props.onClick(this.props.data);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick.bind(this)}>
                <View style={styles.row}>
                    <View>
                        <Text style={[styles.text,{alignItems:'flex-start'}]}>
                            {this.props.data.title}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                        <Text>
                            {this.props.data.company}
                        </Text>
                        <Text>
                            {this.props.data.author}
                        </Text>
                        <Text>
                            {this.props.data.gender}
                        </Text>
                        <Text>
                            {this.props.data.readCount}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


class PostListView extends Component {

    constructor(props) {
        super(props);

        this.requestSceneChange = props.requestSceneChange;

        var list = [];
        list.push({
            title: '판교 맛집 추천해주세요 ㅋㅋ ^^',
            author: '모카주세요',
            company: '삼성SDS',
            gender: 'M',
            single: true,
            date: '2015/06/01 16:30',
            readCount: 100
        });
        list.push({
            title: '연애 너무 어렵네요 ㅠㅠ',
            author: '아메주세요',
            company: '다음카카오',
            gender: 'F',
            single: true,
            date: '2015/06/01 16:30',
            readCount: 100
        });
        list.push({
            title: '헤어졌어요.',
            author: '블루베리',
            company: '네이버',
            gender: 'F',
            single: false,
            date: '2015/06/01 18:30',
            readCount: 300
        });

        this.state = {
            isRefreshing: false,
            loaded: 0,

            rowData: list
        }
    }

    /*size={10}*/

    /* title="Loading..."
     titleColor="#B5B5B5"*/
    /* colors={['#B5B5B5', '#00ff00', '#0000ff']}   android*/
    /* progressBackgroundColor="#ffff00"*/
    _onRefresh() {
        var that = this;
        this.setState({isRefreshing: true});
        //this.state.isRefreshing = true;


        setTimeout(() => {
            // prepend 10 items
         /*   const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: 'Loaded row ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

*/
            var list = [];
            list.push({
                title: '잠실 맛집 추천해주세요 ㅋㅋ ^^',
                author: '모카주세요',
                company: '삼성SDS',
                gender: 'M',
                single: true,
                date: '2015/06/01 16:30',
                readCount: 100
            });
            list.push({
                title: '강남 맛집 추천해주세요 ㅋㅋ ^^',
                author: '모카주세요',
                company: '삼성SDS',
                gender: 'M',
                single: true,
                date: '2015/06/01 16:30',
                readCount: 100
            });
            list.push({
                title: '판교 맛집 추천해주세요 ㅋㅋ ^^',
                author: '모카주세요',
                company: '삼성SDS',
                gender: 'M',
                single: true,
                date: '2015/06/01 16:30',
                readCount: 100
            });
            list.push({
                title: '연애 너무 어렵네요 ㅠㅠ',
                author: '아메주세요',
                company: '다음카카오',
                gender: 'F',
                single: true,
                date: '2015/06/01 16:30',
                readCount: 100
            });
            list.push({
                title: '헤어졌어요.',
                author: '블루베리',
                company: '네이버',
                gender: 'F',
                single: false,
                date: '2015/06/01 18:30',
                readCount: 300
            });

            //console.log(this.state);
            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                rowData: list,
            });
        }, 1000);
    }

            /*Array.from(new Array(10)).map(
             (val, i) => ({text: 'Initial row ' + i, clicks: 0})),*/

    _onClick(row) {
        this.requestSceneChange( { name: 'postView', index: '1' })
        //console.warn("go into readPostView", row);
     /*   row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });*/
        //new navigatino view
    }

    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this._onClick.bind(this)}/>;
        });
        return (
            <ScrollView
                style={styles.scrollview}
                refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#B5B5B5" /* ios*/
                      />
            }>
                {rows}
            </ScrollView>
        );
    }
}

module.exports = PostListView;
