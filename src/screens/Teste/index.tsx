import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Box, Text } from 'native-base';

const data = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  { id: 6, title: 'Item 6' },
  { id: 7, title: 'Item 7' },
  { id: 8, title: 'Item 8' },
  { id: 9, title: 'Item 9' },
  { id: 10, title: 'Item 10' },
  { id: 11, title: 'Item 11' },
  { id: 12, title: 'Item 12' },
];

const numColumns = 3;

const renderItem = ({ item }) => (
  <Box style={styles.item}>
    <Text>{item.title}</Text>
  </Box>
);

const keyExtractor = (item) => item.id.toString();

const Grid = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    height: 120,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});

export default Grid;
