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

import commonStyles from '../../styles/styles';
import dimension from '../../common/dimension';

import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';


class LeftMenu extends Component{

    render(){
        console.log("####" , dimension.screenSize.screenHeight);
        console.log("####", dimension.statusBarHeight);
        //TODO size things needed to be refactored

        return (
            <View style={[{backgroundColor:'#90C3D4', height:dimension.screenSize.screenHeight}]}>
                <Text style={{marginTop:30, color:'white', fontSize:20}}>Left Menu</Text>
                <Button>
                    나의정보
                </Button>

                <Button>
                    운명의매칭
                </Button>

                <Button>
                    대시박스
                </Button>

                <Button>
                    스토어
                </Button>


                <Button>
                    설정
               </Button>

                <Button>
                    도움말
                </Button>
            </View>

        )
    }
}

module.exports = LeftMenu;