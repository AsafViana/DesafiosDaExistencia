import { Pressable, Text, Box, Stack, HStack, Heading, Center, AspectRatio, Image, Badge } from 'native-base'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

enum EnumIcons {
  Livro = 'book',
  Podcast = 'podcast',
  Video = 'play',
  Imagem = 'image',
  Artigo = 'article'
}

interface CardProps {
  icon: keyof typeof EnumIcons 
}

export default function index({ icon }: CardProps) {
  let Icon = <FontAwesome name="book" size={40} color="white" />
  const navigation = useNavigation()

  switch(EnumIcons[icon]) {
    case 'book':
      Icon = <FontAwesome name="book" style={{margin: 5}} size={35} color="white" />
      break

    case 'podcast':
      Icon = <FontAwesome name="podcast" style={{margin: 5}} size={35} color="white" />
      break

    case 'play':
      Icon = <Entypo name="controller-play" size={40} color="white" />
      break

    case 'image':
      Icon = <Entypo name="image-inverted" size={40} color="white" />
      break

    case 'article':
      Icon = <MaterialIcons name="article" size={40} color="white" />
      break
  }

  return (
    <Box alignItems="center" m={5} py={10}>
      
      <Pressable maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="#007aff" _dark={{
          bg: "#007aff"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" roundedTopRight={'3xl'} bottom="0" px="3" py="1.5">
            {Icon}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text fontSize="xs" _light={{
            color: "#007aff"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Pressable>
    </Box>
  )
}
