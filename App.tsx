import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Routes } from './src/routes/index'

import { StatusBar } from 'react-native'

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar barStyle="light-content" />
				<NativeBaseProvider>
					<Routes />
				</NativeBaseProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
