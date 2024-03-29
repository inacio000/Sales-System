import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './modules/Home';
import Login from './modules/login';
import { MenuUrl } from './shared/enums/MenuUrl.enum';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from './shared/components/Icon/Icon';
import { theme } from './shared/Theme/Theme';
import Orders from './modules/orders';
import Profile from './modules/profile';
import Product from './modules/product';
import Cart from './modules/cart';
import SearchProduct from './modules/searchProduct';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const renderTabBarIcon = (color: string, route: RouteProp<ParamListBase, string>) => {
    let iconName: string;

    switch (route.name) {
      case MenuUrl.HOME:
        iconName = 'home';
        break;

      case MenuUrl.CART:
        iconName = 'cart';
        break;
      
        case MenuUrl.SEARCH_PRODUCT:
          iconName = 'search';
          break;

      case MenuUrl.ORDER:
        iconName = 'books';
        break;

      case MenuUrl.PROFILE:
      default:
        iconName = 'profile';
        break;
    }

    return <Icon size={22} name={iconName} color={color} />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => renderTabBarIcon(color, route),
        tabBarActiveTintColor: theme.colors.mainTheme.primary,
        tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        tabBarLabelStyle: {
          marginBottom: 8,
        },
        tabBarStyle: {
          height: 52,
        }
      })}
    >
      <Tab.Screen
        name={MenuUrl.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
            <Tab.Screen
        name={MenuUrl.SEARCH_PRODUCT}
        component={SearchProduct}
        options={{ 
          headerShown: false, 
          title: 'Search'
        }}
      />
      <Tab.Screen
        name={MenuUrl.CART}
        component={Cart}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={MenuUrl.ORDER}
        component={Orders}
        options={{ title: 'Orders', headerShown: false }}
      />
      <Tab.Screen
        name={MenuUrl.PROFILE}
        component={Profile}
        options={{ title: 'Profile', headerShown: false }}
      />
    </Tab.Navigator>
  )
}

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
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={MenuUrl.PRODUCT}
          component={Product}
        />

        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ headerShown: false, title: 'Create User' }}
        />

        <Stack.Screen
          name={MenuUrl.HOME}
          component={TabNavigation}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;