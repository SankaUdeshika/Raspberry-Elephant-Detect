import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Index from './app/Index'
import Detector from './app/Detector'
import Home from './app/Home'
import History from './app/History'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Index">
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Detector" component={Detector} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}
