import { Box, Center, ScrollView } from 'native-base'
import React from 'react'
import SearchBar from '../../component/Search'
import CardVideo from '../../component/CardVideo'
import CarroselWeb from '../../component/CarroselWeb'

export default function index() {
	const itens = [<CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />, <CardVideo />]
	return (
		<Box flex={1} backgroundColor={'#f1f1f1'}>
			<Center style={{ backgroundColor: '#212121' }} flex={0.13} shadow={'9'}>
				<SearchBar />
			</Center>
			<ScrollView flex={1}>
				<CarroselWeb data={itens} renderItem={<CardVideo/>}/>
			</ScrollView>
		</Box>
	)
}
