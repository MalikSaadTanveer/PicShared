//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

// create a component
const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Animatable.Text animation="zoomIn" easing="ease-out" iterationCount="infinite" direction="alternate"
            style={styles.logo}>Pic Shared</Animatable.Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo:{
        fontSize:46,
        color:'teal',
        fontWeight: 'bold',
    },
});

//make this component available to the app
export default SplashScreen;
