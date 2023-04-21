import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native'

import { MaterialIcons, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons'

export function CustomTabBar({ state, descriptors, navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key]

					const isFocused = state.index === index

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						})

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name)
						}
					}

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						})
					}

					let icone
					switch (options.tabBarIcon) {
						case 'home':
							icone = <Entypo color={isFocused ? '#007aff' : '#535353'} name="home" size={35} onPress={onPress} onLongPress={onLongPress} />
							break
						case 'teste':
							icone = <Ionicons color={isFocused ? '#007aff' : '#535353'} name="hammer" size={40} onPress={onPress} onLongPress={onLongPress} />
							break
						case 'book':
							icone = <FontAwesome name="book" size={35} color={isFocused ? '#007aff' : '#535353'} />
							break

						case 'podcast':
							icone = <FontAwesome name="podcast" size={35} color={isFocused ? '#007aff' : '#535353'} />
							break

						case 'play':
							icone = <Entypo name="controller-play" size={35} color={isFocused ? '#007aff' : '#535353'} />
							break

						case 'image':
							icone = <Entypo name="image-inverted" size={35} color={isFocused ? '#007aff' : '#535353'} />
							break

						case 'article':
							icone = <MaterialIcons name="article" size={35} color={isFocused ? '#007aff' : '#535353'} />
							break
					}
					return (
						<TouchableOpacity key={route.key} accessibilityRole="button" accessibilityState={isFocused ? { selected: true } : {}} accessibilityLabel={options.tabBarAccessibilityLabel} testID={options.tabBarTestID} onPress={onPress} onLongPress={onLongPress} style={styles.buttonTab}>
							<View style={{ alignItems: 'center', padding: 4 }}>
								<View style={{ padding: 8, borderRadius: 99, backgroundColor: isFocused ? '#53A5FD96' : 'transparent' }}>{icone}</View>
							</View>
						</TouchableOpacity>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
	content: {
		marginBottom: Platform.OS === 'ios' ? 38 : 24,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		bottom: 0,
		backgroundColor: '#f1f1f1',
		flexDirection: 'row',
		borderRadius: 99,
		gap: 8,
		elevation: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.8,
	},
	buttonTab: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})
