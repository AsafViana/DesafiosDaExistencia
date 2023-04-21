import { createDrawerNavigator } from '@react-navigation/drawer'
import Feed from '../screens/Feed'
import Teste from '../screens/Teste'
import Artigo from '../screens/Artigo'
import Video from '../screens/Video'
import Imagem from '../screens/Imagem'
import Podcast from '../screens/Podcast'
import Livro from '../screens/Livro'
import { Entypo, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

const { Screen, Navigator } = createDrawerNavigator()

export function DrawerRoutes() {
	return (
		<Navigator
			initialRouteName="Feed"
			screenOptions={{
				headerShown: true,
				headerTitleAlign: 'center',
			}}>
			<Screen name="Feed" component={Feed} options={{
				drawerLabel: 'Home',
				drawerIcon: () => <Entypo name="home" size={24} color="#007aff" />,
			}} />

			<Screen name="Teste" component={Teste} options={{
				drawerLabel: 'Home',
				drawerIcon: () => <Ionicons name="hammer" size={24} color="#007aff" />,
			}}/>

			<Screen name="Artigos" component={Artigo} options={{
				drawerLabel: 'Artigos',
				drawerIcon: () => <MaterialIcons name="article" size={24} color="#007aff" />,
			}}/>

			<Screen name="Videos" component={Video} options={{
				drawerLabel: 'Videos',
				drawerIcon: () => <Entypo name="controller-play" size={24} color="#007aff" />,
			}}/>

			<Screen name="Imagens" component={Imagem} options={{
				drawerLabel: 'Imagens',
				drawerIcon: () => <Entypo name="image" size={24} color="#007aff" />,
			}}/>

			<Screen name="Podcast" component={Podcast} options={{
				drawerLabel: 'Podcast',
				drawerIcon: () => <FontAwesome name="podcast" size={24} color="#007aff" />,
			}}/>

			<Screen name="Livros" component={Livro} options={{
				drawerLabel: 'Livros',
				drawerIcon: () => <FontAwesome name="book" size={24} color="#007aff" />,
			}}/>

		</Navigator>
	)
}
