import { NavigationContainer } from "@react-navigation/native"
import {StackRoutes} from "./stack.routes"
import { TabRoutes } from "./tab.routes"
import { DrawerRoutes } from "./drawer.routes"
import { Platform } from 'react-native'
//import { createSwitchNavigator } from 'react-navigation-switch-transitioner';


export function Routes() {
  return (
    <NavigationContainer>
        <DrawerRoutes />
        { /* Platform.OS === 'web' ? <DrawerRoutes/> : <TabRoutes/> */ }
    </NavigationContainer>
  )
}