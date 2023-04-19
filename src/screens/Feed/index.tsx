import { Box, Center, ScrollView, Text } from 'native-base'
import React from 'react'
import SearchBar from '../../component/Search'
import CardVideo from '../../component/CardVideo'
import CarroselWeb from '../../component/CarroselWeb'
import { Video, ResizeMode } from 'expo-av'
import { Button, View, StyleSheet } from 'react-native'

export default function index() {
	const video = React.useRef(null)
	const [status, setStatus] = React.useState({})
	/* const itens = [<CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />] */
	return (
		<Box flex={1} backgroundColor={'#f1f1f1'}>
			<Center style={{ backgroundColor: '#212121' }} pb={6} pt={6} shadow={'9'}>
				<SearchBar />
			</Center>
			<ScrollView flex={1}>
				{/* <CarroselWeb data={itens} renderItem={<CardVideo/>}/> */}
				<CardVideo icon="Artigo" />
				<CardVideo icon="Imagem" />
				<CardVideo icon="Livro" />
				<CardVideo icon="Podcast" />
				<CardVideo icon="Video" />
				
				{/* <CardVideo />
				<CardVideo /> */}
			</ScrollView>
		</Box>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  backgroundColor: '#ecf0f1',
	},
	video: {
	  alignSelf: 'center',
	  width: 320,
	  height: 200,
	},
	buttons: {
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	},
  });