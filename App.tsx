import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {UserProvider} from './src/components/UserContext';

const App = () => {
  return (
    <UserProvider>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </View>
    </UserProvider>
  );
};

export default App;
