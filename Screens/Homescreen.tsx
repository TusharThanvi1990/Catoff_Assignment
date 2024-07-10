
import { auth } from "@/Config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Text, View , StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Background from "../assets/background"

const Homescreen = ({navigation}) =>{
    const [user, setuser] = useState('')

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,user => {
        if (user) {
          // User is signed in
          setuser(user.email);
        } else {
          // User is signed out
          setuser("null");
        }
      });
  
      return unsubscribe; // Cleanup subscription on unmount
    }, []);

    const handlesingout = () => {
        signOut(auth)

    }

    

    return(

        




        <View >
            {user === "null" ?(
                <View>
                  <View >
                  <Text style={{fontSize:36 , marginLeft:15 , marginTop:10 }}>CATOFF</Text>
                   <Text style={{marginLeft:15}}>Assignment by Tushar</Text>
                 </View>

                 <View style={{}}>
                  <Text style = {{margin:130, marginBottom:15, fontSize:20 , }}>Login to continue</Text>
                  <TouchableOpacity style={{marginLeft:145 , backgroundColor:"#b4b9c2", padding:25 , width:100 , borderRadius:20}} onPress ={() => {navigation.navigate("Login")} }><Text>To Login</Text></TouchableOpacity>
                 </View>

                </View>
              
              // <View>
              //   <View style={styles.header}>
              //     <Text style= {styles.logotxt}>CATOFF</Text>
              //     <Text>Assignment by Tushar</Text>
              //   </View>
              //   <View style ={styles.container}>
              //   <Text style = {styles.text}>Login to continue</Text>
              //   <Button title="To login"  onPress ={() => {navigation.navigate("Login")} }/> 
              //   </View>

                )
                :(
                <View>
                  <Text style={{fontSize:36 , marginLeft:15 , marginTop:10 }}>CATOFF <Text style ={{padding:10,fontSize:18}}>Your logged in with ID: {auth.currentUser?.email}</Text></Text>
                  <Text style ={{margin:130, marginBottom:15, fontSize:20}}>Welcome user </Text>
                  <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate("GameFeed")}}>
                    <Text>Explore Games </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={handlesingout}>
                    <Text>Signout</Text>
                </TouchableOpacity>
                </View>


                /* <Text style = {styles.text}>Welcome {user}</Text>
                <Text style = {styles.text}> Catoff_Assignment by Tushar</Text>
                <Text style = {styles.text}>Your Email ID is : {auth.currentUser?.email}</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate("GameFeed")}}>
                    <Text>Explore Games </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={handlesingout}>
                    <Text>Signout</Text>
                </TouchableOpacity>
                </View> */


            )}
        {/* <Text style = {styles.text}>Welcome {user}</Text>
        <Text style = {styles.text}> Catoff_Assignment by Tushar</Text>
        <Text style = {styles.text}>Email: {auth.currentUser?.email}</Text>
        <Text>Sign in to continue</Text>
        
        <Button title="To login"  onPress ={() => {navigation.navigate("Login")} }/> */}
        </View>
    )

} 

const styles = StyleSheet.create({
    header:{
      flex:1,
      justifyContent:"center",
      marginTop:40,
      marginLeft:10,
      height:100,
      backgroundColor:"#FFFFF7 "




    },
    logotxt:{
      fontSize:40,
      color:"#000000",
      fontWeight:"bold"
    },

    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      
      backgroundColor: '#0c0d13',
    },
    text: {
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
      marginBottom: 10,
      marginLeft:37
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

export default Homescreen