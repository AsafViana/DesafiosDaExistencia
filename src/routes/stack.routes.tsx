import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login/Index'
import Cadastro from '../screens/Cadastro'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
	return (
		<Navigator >
			<Screen name="Login" component={Login} options={{headerShown:false}} />
			<Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
		</Navigator>
	)
}
