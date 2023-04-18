import { VStack, Divider, Box, Heading, Input, Icon } from 'native-base'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function index() {
	return (
		<VStack my="4" space={5} w="100%" maxW="300px">
			<VStack w="100%" space={5} alignSelf="center">
				<Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
			</VStack>
		</VStack>
	)
}
