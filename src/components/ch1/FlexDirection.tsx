import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// https://www.w3schools.com/cssref/css3_pr_flex-direction.asp
// https://reactnative.dev/docs/flexbox#flex-direction

const FlexDirection = () => {
  return (
    <View style={FlexDirectionStyle.container}>
      <View
        style={{
          width: 70,
          backgroundColor: 'red',
        }}>
        <Text style={FlexDirectionStyle.textStyle}>1</Text>
      </View>
      <View
        style={{
          width: 70,
          backgroundColor: 'orange',
        }}>
        <Text style={FlexDirectionStyle.textStyle}>2</Text>
      </View>
      <View
        style={{
          width: 70,
          backgroundColor: 'green',
        }}>
        <Text style={FlexDirectionStyle.textStyle}>3</Text>
      </View>
    </View>
  );
};

export default FlexDirection;

const FlexDirectionStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // flexDirection: 'column-reverse',
    // flexDirection: 'row',
    // flexDirection: 'row-reverse',
  },
  textStyle: {
    fontSize: 37,
  },
});
