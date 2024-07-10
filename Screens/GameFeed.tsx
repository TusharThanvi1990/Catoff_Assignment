import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import {games, PAGE_SIZE} from "../assets/GameData"
import GameCard from './Gamecard';

const GameFeed = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [data, setData] = useState(games.slice(0, PAGE_SIZE * currentPage)); // Initial data

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const newData = games.slice(0, PAGE_SIZE * nextPage);
    setData(newData);
    setCurrentPage(nextPage);
  };

  const renderItem = ({ item }) => (
    <GameCard game={item} navigation={navigation} />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={() => (
          <View style={styles.pagination}>
            <Button title="Load More" onPress={handleLoadMore} disabled={data.length >= games.length} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default GameFeed;