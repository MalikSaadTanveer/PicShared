//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainScreen from '../components/MainScreen';
import SplashScreen from '../components/SplashScreen';

// create a component
const Home = () => {
    const [splashScreen, setSplashScreen] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setSplashScreen(false)
        },3000)
    })
    return (
        <View style={styles.container}>
            
             {
                 splashScreen ? <SplashScreen/> : <MainScreen/>
             }   
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Home;
