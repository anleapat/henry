import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// https://www.w3schools.com/cssref/css3_pr_align-self.asp
// https://reactnative.dev/docs/flexbox#align-self

const AlignSelf = () => {
  return (
    <View style={AlignSelfStyle.container}>
      <View
        style={{
          backgroundColor: 'red',
          height: 170,
          alignSelf: 'auto',
        }}>
        <Text style={AlignSelfStyle.textStyle}>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'orange',
          height: 270,
          alignSelf: 'center',
        }}>
        <Text style={AlignSelfStyle.textStyle}>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          height: 370,
        }}>
        <Text style={AlignSelfStyle.textStyle}>3</Text>
      </View>
    </View>
  );
};

export default AlignSelf;

const AlignSelfStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: 37,
  },
});
