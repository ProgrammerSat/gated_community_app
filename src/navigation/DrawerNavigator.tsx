import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Bulletin from '../screens/Bulletin';
import Contact from '../screens/Contact';
import Donations from '../screens/Donations';
import Subscription from '../screens/Subscription';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Bulletin" defaultStatus="open">
      <Drawer.Screen name="Bulletin" component={Bulletin} />
      <Drawer.Screen name="Subscription" component={Subscription} />
      <Drawer.Screen name="Donations" component={Donations} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
