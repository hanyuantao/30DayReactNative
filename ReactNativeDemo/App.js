/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    FlatList,
    SectionList
} from 'react-native';

// import {InputDemo} from './Demo/InputDemo'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class  Bananas extends Component{
    render(){
        let pic = {
            url:'http://n.sinaimg.cn/sports/transform/w650h484/20171203/FYQv-fypikwt5684817.jpg'
        }
        return (
            <Image source={pic} style={{width:120, height:80}} />
        );
    }
}
class List extends  Component{
    render(){
        return(
            <View>
            <Bananas/><Blink text={this.props.name}> {this.props.name}</Blink>
            </View>
        );
    }
}

class Blink extends  Component{
    constructor(props){
        super(props);
        this.state = {showText:true};


        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render(){
        let display = this.state.showText ? this.props.text : '';
        return(
            <Text style={styles.redTitle}>{display}</Text>
        );
    }
}

class  SizeDemo extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',//占满
                // flexDirection:'column',//row row-reverse column column-reverse
                // justifyContent:'space-around', //space-between(从头开始等间距)flex-start(从头依次排列)、flex-end 从末尾依次倒序排列、center居中排列、space-arrow（等距离）
                // alignItems:'stretch'//alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式

            }}>
                <View style={{height:100, backgroundColor:'#ff3a11'}}></View>
                <View style={{height:100, backgroundColor:'#ffe600'}}></View>
                <View style={{height:100, backgroundColor:'#1b58ff'}}></View>
            </View>
        );
    }
}

//列表
class  FlatListDemo extends  Component{
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: '大护法'},
                        {key: '绣春刀II：修罗战场'},
                        {key: '神偷奶爸3'},
                        {key: '神奇女侠'},
                        {key: '摔跤吧，爸爸'},
                        {key: '悟空传'},
                        {key: '闪光少女'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

//分组表
class SectionListDemo extends Component{
    constructor(props) {
      super(props);
    }

    //section
    _sectionHeader = (sectionInfo) => {
        const section = sectionInfo.section.title;
        return <Text style={styles.sectionHeader}>{section}</Text>
    }

    //item
    _item = (itemInfo) => {
        const cell = itemInfo.item.key;
        return <Text style={styles.item}>{cell}</Text>
    }


    render(){
        return(
            <View style={styles.container}>
                <SectionList
                    sections = {[
                        {title :'MVP', data:[{key:'丁彦雨航'}]},
                        {title:'球员', data:[{key:'睢冉'}, {key:'莫泰'},{key:'张春君'},{key:'吴科'}]},
                    ]}

                    //直接写
                    // renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    // renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}

                    //拆分单独使用
                    renderSectionHeader = {this._sectionHeader}
                    renderItem = {this._item}

                />

            </View>
            );
    }
}


export default class App extends Component<{}> {
  render() {
    return (
        <SectionListDemo />
        /*
        <View>
            <List name={"丁彦雨航30分取胜四川"}/>
            <List name={"睢冉退出微博"}/>
            <List name={"山东莫泰"}/>
        </View>

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
      */
    );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:22
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    listTitle: {
        textAlign: 'left',
        color: '#ff0000',
        fontSize: 18,
    },
    redTitle: {
        textAlign: 'left',
        color: '#ff0000',
        fontSize: 20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },

});
