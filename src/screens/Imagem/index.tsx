import Mobile from './Mobile'
import Web from './Web'
import { Platform } from 'react-native'

export default function index() {
	if(Platform.OS == 'web'){
		return <Web/>
	}else{
		return <Mobile/>
	}
}
