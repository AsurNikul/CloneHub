import {StatusBar, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {AuthScr} from './screens';
import SCREENS from './route';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Home from '../screens/Main/Home';

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.HOME}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={SCREENS.HOME} component={Home} />
        <Stack.Screen name={SCREENS.SETTING} component={AuthScr.Setting} />
        <Stack.Screen
          name={SCREENS.REQUEST_NEW}
          component={AuthScr.RequestNew}
        />
        <Stack.Screen name={SCREENS.Terms} component={AuthScr.Terms} />
        <Stack.Screen name={SCREENS.WEBAPPS} component={AuthScr.WebApps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
