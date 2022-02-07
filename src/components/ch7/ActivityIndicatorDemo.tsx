import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const ActivityIndicatorDemo = () => {
  return (
    <View style={ActivityIndicatorDemoStyle.container}>
      <ActivityIndicator />
      <ActivityIndicator size={'small'} />
      <ActivityIndicator size={'large'} />
      <ActivityIndicator size={'large'} color={'skyblue'} />
    </View>
  );
};

export default ActivityIndicatorDemo;

const ActivityIndicatorDemoStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
