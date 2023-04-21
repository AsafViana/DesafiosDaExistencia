import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import Teste from '../screens/Teste'
import Artigo from '../screens/Artigo'
import Video from '../screens/Video'
import Imagem from '../screens/Imagem'
import Podcast from '../screens/Podcast'
import Livro from '../screens/Livro'
import {CustomTabBar} from '../component/TabBar'

const { Screen, Navigator } = createBottomTabNavigator()

export function TabRoutes() {
	return (
		<Navigator initialRouteName='Feed' 
        screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#212121',

            tabBarStyle: {
                borderTopWidth: 0,
                backgroundColor: '#fff'
            }
        }}
        tabBar={props => <CustomTabBar {...props}/>}>
			<Screen name="Feed" component={Feed} options={{headerShown:false, tabBarIcon: 'home'}} />
			<Screen name="Artigo" component={Artigo} options={{headerShown:false, tabBarIcon: 'article'}} />
			<Screen name="Video" component={Video} options={{headerShown:false, tabBarIcon: 'play'}} />
			<Screen name="Imagem" component={Imagem} options={{headerShown:false, tabBarIcon: 'image'}} />
			<Screen name="Podcast" component={Podcast} options={{headerShown:false, tabBarIcon: 'podcast'}} />
			<Screen name="Livro" component={Livro} options={{headerShown:false, tabBarIcon: 'book'}} />
		</Navigator>
	)
}
