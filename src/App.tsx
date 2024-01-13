import { SafeAreaView } from 'react-native';
import Login from './modules/login';
import { Provider } from 'react-redux';
import store from './store';
import GlobalModal from './shared/components/Modal/GlobalModal/GlobalModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './modules/Home';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      {/* <SafeAreaView> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
          {/* <Login /> */}
        </NavigationContainer>
      {/* </SafeAreaView> */}
    </Provider>
  );
};

export default App;
