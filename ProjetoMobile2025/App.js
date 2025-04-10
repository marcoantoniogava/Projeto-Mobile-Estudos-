import 'react-native-gesture-handler'; // Deve ser a PRIMEIRA importação!
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import Home from './Screens/home';
import Login from './Screens/login';
import Feed from './Screens/feed';
import Count from './Screens/count';
import { createStackNavigator } from '@react-navigation/stack';

function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="FeedTab" component={Feed} />
      <Tab.Screen name="CountTab" component={Count} />
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaLogin" component={Login} />
        <Stack.Screen options={{headerShown:false}} name='Home' component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
  },
});
