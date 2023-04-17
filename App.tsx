import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/Routes'
import { StatusBar, Text, View } from 'react-native'
import { NativeBaseProvider } from 'native-base'

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'light-content'} hidden={false} translucent={true} backgroundColor={'#0000'} />
			<NativeBaseProvider>
				<Routes />
			</NativeBaseProvider>
		</NavigationContainer>
	)
}
