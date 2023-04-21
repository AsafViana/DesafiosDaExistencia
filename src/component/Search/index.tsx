import { VStack, Divider, Box, Heading, Input, Icon } from 'native-base'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function index(props) {
	const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleInputFocus = () => {
    setBackgroundColor('#e6e6e6');
  };

  const handleInputBlur = () => {
    setBackgroundColor('#fff');
  };
	return (
		<VStack {...props}
			space={5}
			w="100%"
			maxW="300px"
			>
			<VStack w="100%"  alignSelf="center">
				<Input onBlur={handleInputBlur} onFocus={handleInputFocus} backgroundColor={backgroundColor} placeholder="Search" variant="filled" w="100%" h={50} borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
			</VStack>
		</VStack>
	)
}
