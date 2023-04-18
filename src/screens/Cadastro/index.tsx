import { Box, Center, Heading, VStack, FormControl, Input, Button } from 'native-base'
import React, { useState, useEffect } from 'react'
import { auth, createUserWithEmailAndPassword } from '../../service/firebase'

export default function index() {
	const [Email, setEmail] = useState()
	const [Senha, setSenha] = useState()
	const [ConfirmeSenha, setConfirmeSenha] = useState()
    const [Enviar, setEnviar] = useState(false)

    useEffect(() => {
        if(Senha === ConfirmeSenha && Senha != null && ConfirmeSenha != null){
            setEnviar(true)
        }else{
            setEnviar(false)
        }
    }, [Senha, ConfirmeSenha])

    function Cadastrar() {
        createUserWithEmailAndPassword(auth, Email, Senha)
        .then(() => {
            alert('cadastrado')
        })
        .catch(err => {
            console.error(err.message)
        })
    }
    
	return (
		<Center w="100%">
			<Box safeArea p="2" w="90%" maxW="290" py="150">
				<Heading
					size="lg"
					color="coolGray.800"
					_dark={{
						color: 'warmGray.50',
					}}
					fontWeight="semibold">
					Cadastrar
				</Heading>
				<Heading
					mt="1"
					color="coolGray.600"
					_dark={{
						color: 'warmGray.200',
					}}
					fontWeight="medium"
					size="xs">
					Cadastre-se para continuar!
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
						<Input onChangeText={setSenha} value={Senha} type="password" />
					</FormControl>
					<FormControl>
						<FormControl.Label>Confirme sua senha</FormControl.Label>
						<Input onChangeText={setConfirmeSenha} value={ConfirmeSenha} type="password" />
					</FormControl>

					{/* Entrar */}
					<Button isDisabled={!Enviar} onPress={Cadastrar} mt="2" colorScheme="indigo">
						Enviar
					</Button>
				</VStack>
			</Box>
		</Center>
	)
}
