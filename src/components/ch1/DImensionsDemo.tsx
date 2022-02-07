import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const dimensions = Dimensions.get('window');
const h = dimensions.height;
const w = dimensions.width;
const s = dimensions.scale;

const DimensionsDemo = () => {
  return (
    <View style={DimensionsDemoStyle.container}>
      <Text>window height:{h}</Text>
      <Text>window width:{w}</Text>
      <Text>window scale:{s}</Text>
    </View>
  );
};

export default DimensionsDemo;

const DimensionsDemoStyle = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: h * 0.73,
  },
});
