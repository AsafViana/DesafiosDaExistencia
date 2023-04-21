import { Box, Center, ScrollView, FlatList } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../../component/Search'
import CardVideo from '../../component/CardVideo'

export default function index() {
	const data = [
		{ id: 1, title: 'Item 1', icon: 'Imagem' },
		{ id: 2, title: 'Item 2', icon: 'Imagem' },
		{ id: 3, title: 'Item 3', icon: 'Imagem' },
		{ id: 4, title: 'Item 4', icon: 'Imagem' },
		{ id: 5, title: 'Item 5', icon: 'Imagem' },
		{ id: 6, title: 'Item 6', icon: 'Imagem' },
		{ id: 7, title: 'Item 7', icon: 'Imagem' },
		{ id: 8, title: 'Item 8', icon: 'Imagem' },
		{ id: 9, title: 'Item 9', icon: 'Imagem' },
		{ id: 10, title: 'Item 10', icon: 'Imagem' },
		{ id: 11, title: 'Item 11', icon: 'Imagem' },
		{ id: 12, title: 'Item 12', icon: 'Imagem' },
	  ];
	return (
		<Box alignItems={'center'} justifyContent={'center'} flex={1} backgroundColor={'#f1f1f1'}>
			<ScrollView flex={1}>
			<Center style={{ backgroundColor: '#212121' }} pb={6} pt={6} shadow={'9'} rounded={'3xl'}>
				<SearchBar />
			</Center>
			<FlatList
      data={data}
      renderItem={(data) => <CardVideo icon={data.item.icon} />}
      
      numColumns={3}
      contentContainerStyle={styles.container}
    />
			</ScrollView>
		</Box>
	)
}

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