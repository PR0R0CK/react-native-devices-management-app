import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ConnectionScreen from './screens/ConnectionScreen';
import DevicesScreen from './screens/DevicesScreen';
import NewDeviceScreen from './screens/NewDeviceScreen';
import { useFonts, Inter_900Black, Inter_800ExtraBold, Inter_700Bold, Inter_500Medium }
  from '@expo-google-fonts/inter';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return (<View>
      <Text>Loading...</Text>
    </View>);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Devices') {
              iconName = focused
                ? 'grid-outline'
                : 'grid-outline';
            } else if (route.name === 'Connection') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'New device') {
              iconName = focused ? 'add-outline' : 'add-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4a148c',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Devices" component={DevicesScreen} />
        <Tab.Screen name="Connection" component={ConnectionScreen} />
        <Tab.Screen name="New device" component={NewDeviceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}