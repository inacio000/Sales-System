import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './modules/Home';
import Login from './modules/login';
import { MenuUrl } from './shared/enums/MenuUrl.enum';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name={MenuUrl.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={MenuUrl.LOGIN}
          component={Login}
          options={{ headerShown: true }}
        />

        <Stack.Screen name={MenuUrl.HOME} component={Home} />

        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ headerShown: true, title: 'Create User' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;