// GameDetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { games } from '../assets/GameData'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const GameDetailsScreen = ({ route , navigation }) => {
  const { gameId } = route.params;
  const game = games.find(item => item.id === gameId);

  return (
    
    <View style={styles.container}>
      <Image source={game.image} style={styles.image} />
      
      {/* <Text style={styles.title}> {game.Image}</Text> */}
     <Text style={{margin:30}}>{game.description}</Text>
     <TouchableOpacity style ={{backgroundColor:"gray" , padding:40, borderRadius:40}} onPress={() => {navigation.navigate("GameDashboard")}}><Text style ={{fontSize:30}}>Join</Text></TouchableOpacity>

     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    
  },
});

export default GameDetailsScreen;
