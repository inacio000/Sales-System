import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './modules/Home';
import Login from './modules/login';
import { MenuUrl } from './shared/enums/MenuUrl.enum';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from './shared/components/Icon/Icon';
import { theme } from './shared/Theme/Theme';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
            
              case 'Orders':
                iconName = 'cart';
                break;

              default:
                iconName = 'profile';
                break;
            }

            return <Icon size={20} name={iconName} color={color}/>;
          },
          tabBarActiveTintColor: theme.colors.mainTheme.primary,
          tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Home} options={{ title: 'Profile'}}/>
        <Tab.Screen name="Orders" component={Home}  options={{ title: 'Orders'}}/>
      </Tab.Navigator>

      {/* <Stack.Navigator>
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

      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default Navigation;