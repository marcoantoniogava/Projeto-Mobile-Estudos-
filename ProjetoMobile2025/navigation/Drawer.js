import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/login.js';
import Home from './screens/home.js'
import 'react-native-gesture-handler';

export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Login' component={Login}/>
          <Drawer.Screen name='Home' component={Home}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  }
})