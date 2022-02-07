import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp
// https://reactnative.dev/docs/flexbox#flex-wrap

const FlexWrap = () => {
  return (
    <View style={FlexWrapStyle.container}>
      <View
        style={{
          backgroundColor: 'red',
          ...FlexWrapStyle.innerView,
        }}>
        <Text style={FlexWrapStyle.textStyle}>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'orange',
          ...FlexWrapStyle.innerView,
        }}>
        <Text style={FlexWrapStyle.textStyle}>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          ...FlexWrapStyle.innerView,
        }}>
        <Text style={FlexWrapStyle.textStyle}>3</Text>
      </View>
    </View>
  );
};

export default FlexWrap;

const FlexWrapStyle = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    maxHeight: 200,
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
  innerView: {
    height: 70,
    width: 30,
  },
  textStyle: {
    fontSize: 37,
  },
});
