import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import DrawerNavigator from '../navigation/DrawerNavigator'; // Use DrawerNavigator!
import Bulletin from '../screens/Bulletin';
import Subscription from '../screens/Subscription';
import Payment from '../screens/Payment';

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
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
}
