import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Input , Button} from 'react-native-elements';
import {auth} from '../firebase';
const RegisterScreen = () =>  {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    user.updateProfile({
                    displayName: name,
                    photoURL: imageURL? imageURL : "https://us.123rf.com/450wm/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6"
                    }).then(() => {
                    // Update successful
                    // ...
                    }).catch((error) => {
                    // An error occurred
                    // ...
                    });  
                    // ...
                })
                .catch((error) => {

                    var errorMessage = error.message;
                    alert(errorMessage)
                });
    }
    return(
        <View style = {styles.container}>
            <Input
                placeholder = "Enter your name"
                label = "Name"
                leftIcon = {{type : 'material', name : 'badge'}}
                value = {name}
                onChangeText = {text => setName(text)}
            />
            <Input
                placeholder = "Enter your email"
                label = "Email"
                leftIcon = {{type : 'material', name : 'email'}}
                value = {email}
                onChangeText = {text => setEmail(text)}
            />
            <Input
                placeholder = "Enter your password"
                label = "Password"
                leftIcon = {{type : 'material', name : 'lock'}}
                value = {password}
                onChangeText = {text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder = "Enter your image URL"
                label = "Profile Picture"
                leftIcon = {{type : 'material', name : 'face'}}
                value = {imageURL}
                onChangeText = {text => setImageUrl(text)}
            />

            <Button title = "register" onPress = {register} style = {styles.button}/>

        </View>
    )
}

export default RegisterScreen;
const styles = StyleSheet.create({
    button : {
        width : 200,
        marginTop : 10
    },
    container : {
        flex : 1,
        alignItems : 'center',
        padding : 10
    }
})

