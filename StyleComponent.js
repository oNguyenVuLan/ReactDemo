import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class StyleComponent extends Component {
render(){
    return (
        <View>
              <Text style={styles.red}>just red</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red :{
        color: 'red'
    }
});
AppRegistry.registerComponent('AwesomeProject', () => StyleComponent);
