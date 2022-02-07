import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Helloworld from '../ch1/Helloworld';
import AlbumLikeDemo from '../ch2/AlbumLikeDemo';
import NavigationList from './NavigationList';
import FacebookLikeLogin from '../ch3/FacebookLikeLogin';
import InstagramLikeScrollView from '../ch4/InstagramLikeScrollView';
import Networking from '../ch5/Networking';
import FlatListDemo from '../ch6/FlatListDemo';
import SectionListDemo from '../ch6/SectionListDemo';
import ActivityIndicatorDemo from '../ch7/ActivityIndicatorDemo';

const Stack = createNativeStackNavigator();

const NavigationDemo = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavigationList">
        <Stack.Screen
          name={'NavigationList'}
          component={NavigationList}></Stack.Screen>
        <Stack.Screen name={'HelloWorld'} component={Helloworld}></Stack.Screen>
        <Stack.Screen
          name={'AlbumLikeDemo'}
          component={AlbumLikeDemo}></Stack.Screen>
        <Stack.Screen
          name={'FacebookLikeLogin'}
          component={FacebookLikeLogin}></Stack.Screen>
        <Stack.Screen
          name={'InstagramLikeScrollView'}
          component={InstagramLikeScrollView}></Stack.Screen>
        <Stack.Screen name={'Networking'} component={Networking}></Stack.Screen>
        <Stack.Screen
          name={'FlatListDemo'}
          component={FlatListDemo}></Stack.Screen>
        <Stack.Screen
          name={'SectionListDemo'}
          component={SectionListDemo}></Stack.Screen>
        <Stack.Screen
          name={'ActivityIndicatorDemo'}
          component={ActivityIndicatorDemo}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationDemo;
