// GameCard.js
import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const GameCard = ({ game, navigation }) => {
  const handlePress = () => {
    // Navigate to game screen with game details
    navigation.navigate('GameDetails', { gameId: game.id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={game.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.description}>{game.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    objectFit:"contain"
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default GameCard;
