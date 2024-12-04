import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Index from './app/Index'
import Detector from './app/Detector'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Index">
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Detector" component={Detector} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}
