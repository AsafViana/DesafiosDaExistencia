import { Box, Text, FormControl, Input, Center, Heading, VStack, Link, HStack, Button, useColorMode } from 'native-base'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth, signInWithEmailAndPassword } from '../../service/firebase'

export default function Index() {
	const navigation = useNavigation()
	const [Email, setEmail] = useState()
	const [Senha, setSenha] = useState()

	 function Logar() {
		signInWithEmailAndPassword(auth, Email, Senha)
		  .then(() => {
			navigation.navigate('Feed')
		  })
		  .catch((err) => {
			console.error(err);
		  });
	  } 

	return (
		<Center w="100%">
			<Box safeArea p="2" py="150" w="90%" maxW="290" justifyContent={'center'} alignContent={'center'}>
				{/* Cabeçalho */}
				<Heading
					size="lg"
					fontWeight="600"
					color="coolGray.800"
					_dark={{
						color: 'warmGray.50',
					}}>
					Bem vindo
				</Heading>
				<Heading
					mt="1"
					_dark={{
						color: 'warmGray.200',
					}}
					color="coolGray.600"
					fontWeight="medium"
					size="xs">
					Entre para continuar!
				</Heading>

				<VStack space={3} mt="5">
					{/* Email */}
					<FormControl>
						<FormControl.Label>Email</FormControl.Label>
						<Input onChangeText={setEmail} value={Email} />
					</FormControl>

					{/* Senha */}
					<FormControl>
						<FormControl.Label>Senha</FormControl.Label>
						<Input type="password" onChangeText={setSenha} value={Senha}/>
						<Link
							_text={{
								fontSize: 'xs',
								fontWeight: '500',
								color: 'indigo.500',
							}}
							alignSelf="flex-end"
							mt="1">
							Esqueceu a senha?
						</Link>
					</FormControl>

					{/* Entrar */}
					<Button onPress={Logar} mt="2" colorScheme="indigo">
						Entrar
					</Button>

					{/* Novo */}
					<HStack mt="6" justifyContent="center">
						<Text
							fontSize="sm"
							color="coolGray.600"
							_dark={{
								color: 'warmGray.200',
							}}>
							Sou novo por aqui?{' '}
						</Text>
						<Link
							onPress={() => {
								navigation.navigate('Cadastro')
							}}
							_text={{
								color: 'indigo.500',
								fontWeight: 'medium',
								fontSize: 'sm',
							}}
							href="#">
							Cadastre-se
						</Link>
					</HStack>
				</VStack>
			</Box>
		</Center>
	)
}
