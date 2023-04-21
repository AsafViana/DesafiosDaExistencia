import { Box, Center, ScrollView, Text } from 'native-base'
import React from 'react'
import SearchBar from '../../component/Search'
import CardVideo from '../../component/CardVideo'

export default function index() {
	return (
		<Box flex={1} backgroundColor={'#f1f1f1'}>
			<Center style={{ backgroundColor: '#212121' }} pb={6} pt={6} shadow={'9'}>
				<SearchBar />
			</Center>
			<ScrollView flex={1}>
				
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				<CardVideo icon='Podcast' />
				
			</ScrollView>
		</Box>
	)
}
