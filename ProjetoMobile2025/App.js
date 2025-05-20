import 'react-native-gesture-handler'; // Deve ser a PRIMEIRA importação!
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import Home from './Screens/home';
import Login from './Screens/login';
import Feed from './Screens/feed';
import Count from './Screens/count';
import Produto from './Screens/produto';
import Cadastro from './Screens/cadastro';
import Cadproduto from './Screens/cadastroproduto';


function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="FeedTab" component={Feed} />
      <Tab.Screen name="CountTab" component={Count} />
      <Tab.Screen name="ProductTab" component={Produto} />
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaLogin" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroProduto" component={Cadproduto} />
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
