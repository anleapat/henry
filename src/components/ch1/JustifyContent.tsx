import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// https://www.w3schools.com/cssref/css3_pr_justify-content.asp
// https://reactnative.dev/docs/flexbox#justify-content

const JustifyContent = () => {
  return (
    <View style={JustifyContentStyle.container}>
      <View
        style={{
          width: 70,
          backgroundColor: 'red',
        }}>
        <Text style={JustifyContentStyle.textStyle}>1</Text>
      </View>
      <View
        style={{
          width: 70,
          backgroundColor: 'orange',
        }}>
        <Text style={JustifyContentStyle.textStyle}>2</Text>
      </View>
      <View
        style={{
          width: 70,
          backgroundColor: 'green',
        }}>
        <Text style={JustifyContentStyle.textStyle}>3</Text>
      </View>
    </View>
  );
};

export default JustifyContent;

const JustifyContentStyle = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    backgroundColor: 'grey',
    justifyContent: 'flex-start',
    flex: 1,
  },
  textStyle: {
    fontSize: 37,
  },
});
