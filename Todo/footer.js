/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet
} from 'react-native';


class Footer extends Component<{}> {
    render() {
        const {filter}= this.props;
        return (
            <View style={styles.container}>
                <View style={styles.filters}>
                    <TouchableOpacity style={[styles.filter, filter=="ALL" && styles.selected]} onPress={()=> this.props.onFilter("ALL")}>
                        <Text>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.filter, filter=="Active" && styles.selected]} onPress={()=> this.props.onFilter("Active")}>
                        <Text>Active</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.filter, filter=="Complete" && styles.selected]} onPress={()=> this.props.onFilter("Complete")}>
                        <Text>Complete</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:16,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },

    filters:{
        flexDirection:"row"
    },

    filter:{
        padding:8,
        borderRadius:5,
        borderWidth:1,
        borderColor:"transparent"
    },
    selected:{
        borderColor:"#d00"
    }
})
export default Footer;