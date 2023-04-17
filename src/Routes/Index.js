import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../view/Login'

const Stack = createNativeStackNavigator()

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName="NovoUsuario">
			<Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
		</Stack.Navigator>
	)
}
