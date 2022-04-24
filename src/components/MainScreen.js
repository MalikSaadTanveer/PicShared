//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import data from '../utils/AllData'
import Share from 'react-native-share'
// create a component
const WIDTH = Dimensions.get('screen').width;
const MainScreen = () => {

    const handleShare = async (item)=>{
        const shareOptions = {
            message:item.text,
            url: 'data:image/jpeg;base64,'+item.image,            
        }

        try {
            await Share.open(shareOptions)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Pics</Text>
            <ScrollView style={{ width: '100%', }}>
                <View style={styles.inner}>
                    {data.map((item, index) =>(
                        <View style={styles.card} key={index}>
                        <Image source={{
                            uri:'data:image/jpeg;base64,'+item.image
                            // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVM4YzmAk55qwOPp_TNC8w83BAb7bCTVKnw&usqp=CAU'
                            }}
                            style={styles.cardImage} resizeMode="stretch" />

                        <Text style={styles.title}>{item.text}</Text>

                        <MaterialCommunityIcons
                            name='share'
                            color={'white'}
                            style={styles.shareIcon}
                            onPress={()=>handleShare(item)}
                        />
                    </View>
                    ))}

                    
                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    header: {
        color: 'teal',
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 24,
        borderBottomColor: 'teal',
        borderBottomWidth: 1
    },
    inner: {
        width: '90%',
        marginLeft: '5%',
    },
    card: {
        backgroundColor: 'white',
        width: '100%',
        marginVertical: 20,
        borderRadius: 6,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: 'black',
        position: 'relative'

    },
    cardImage: {
        width: WIDTH * 0.9,
        height: 250,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    title: {
        color: 'teal',
        fontSize: 20,
        paddingVertical:10,
        paddingHorizontal: 10
    },
    shareIcon: {
        position: 'absolute',
        top: 10,
        right:10,
        zIndex:2,
        fontSize: 30,
        backgroundColor: 'rgba(0,128,128,0.7)',
        color: 'white',
        width: 50,
        height: 50,
        borderRadius: 50,
        paddingTop: 7,
        paddingLeft: 10,
    }
});

//make this component available to the app
export default MainScreen;
