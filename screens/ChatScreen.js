import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../firebase';
import {AntiDesign} from '@expo/vector-icons';
const ChatScreen = ({navigation}) =>{

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight : ()=>{
                <AntiDesign name = 'logout' size ={24} color = "black"/>
            }
        })
    },[])

    const signOut = ()=> {
        auth.signOut().then(()=> {
            navigation.replace('Login')

        }).catch((error)=>{

        });
        
    }
    return(
        <View>
            <Text>Chat Screen</Text>
        </View>
    )
}
export default ChatScreen;
