import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// https://reactnative.dev/docs/flexbox

const FlexView = () => {
  return (
    <View style={FlexViewStyle.container}>
      <View
        style={{
          ...FlexViewStyle.innerViewStyle,
          backgroundColor: 'red',
          flex: 3,
        }}>
        <Text style={FlexViewStyle.textStyle}>Hello world first!!</Text>
      </View>
      <View
        style={{
          ...FlexViewStyle.innerViewStyle,
          backgroundColor: 'orange',
          flex: 7,
        }}>
        <Text style={FlexViewStyle.textStyle}>Hello world second!!</Text>
      </View>
    </View>
  );
};

export default FlexView;

const FlexViewStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'green'
    flex: 1,
  },
  textStyle: {
    fontSize: 37,
    color: 'green',
  },
  innerViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'green'
    // flex: 1,
  },
});
