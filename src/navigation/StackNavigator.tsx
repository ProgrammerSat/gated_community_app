import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import DrawerNavigator from '../navigation/DrawerNavigator'; // Use DrawerNavigator!
import Bulletin from '../screens/Bulletin';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Bulletin" component={Bulletin} />
    </Stack.Navigator>
  );
}
