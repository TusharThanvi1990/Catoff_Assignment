
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pedometer } from 'expo-sensors';

const GameDashboard = () => {
  const [stepCount, setStepCount] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const subscription = Pedometer.watchStepCount(result => {
      setStepCount(result.steps);
    })

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.gameDetails}>
        <Text style={styles.heading}>Game Details</Text>
        {/* Display game details here */}
        <Text>Game Name: Example Game</Text>
        <Text>Score: 1000</Text>
        <Text>Level: 5</Text>
      </View>
      <View style={styles.pedometer}>
        <Text style={styles.heading}>Live Pedometer</Text>
        <Text>Steps: {stepCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameDetails: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 10,
  },
  pedometer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    width: '100%',
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default GameDashboard;
