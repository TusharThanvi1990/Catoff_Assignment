import React, { useEffect } from "react";
import { useState } from "react";
import { Text, View , Button , StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {auth} from "../Config/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Loginscreen = ({navigation}) =>{
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')

    useEffect(() =>{
        const unsuscribe = onAuthStateChanged(auth ,user =>{
             if(user){
                navigation.navigate("Home")
             }
        },)
        return unsuscribe
    }, [])

    const handlesignup = ()=> {
        createUserWithEmailAndPassword(auth , email , password)
        .then(userCredentials =>{ 
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message));
        
    }

    const handlelogin = () =>{
      signInWithEmailAndPassword(auth, email , password)
      .then(usercredential =>{
        const user = usercredential.user
      }).catch(error => alert(error.message));
    }
    return(
       
      <View style={styles.container}>
        <Text style={styles.logo}>CATOFF</Text>
        <Text style={styles.logo}>Tushar's Assignment</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={text => setemail(text)}
            
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={text => setpassword(text)}
            
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handlesignup}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handlelogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>


        <TouchableOpacity>
          <Text style={styles.forgot}>Don't have account Create one </Text>
        </TouchableOpacity>
      </View>
    
        
        
    )

} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0c0d13',
    },
    logo: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#53fef8',
      marginBottom: 40,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#465881',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
    inputText: {
      height: 50,
      color: 'white',
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#fb5b5a',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 1,
    },
    loginText: {
      color: 'white',
      fontWeight: 'bold',
    },
    forgot: {
      color: 'white',
      fontSize: 12,
    },
  });

export default Loginscreen