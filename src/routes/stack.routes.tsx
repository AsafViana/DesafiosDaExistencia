import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login/Index'
import Cadastro from '../screens/Cadastro'
import Feed from '../screens/Feed'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
	return (
		<Navigator initialRouteName='Feed' >
			<Screen name="Login" component={Login} options={{headerShown:false}} />
			<Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
			<Screen name="Feed" component={Feed} options={{headerShown:false}} />
		</Navigator>
	)
}
