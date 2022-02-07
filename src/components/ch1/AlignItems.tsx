import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// https://www.w3schools.com/cssref/css3_pr_align-items.asp
// https://reactnative.dev/docs/flexbox#align-items

const AlignItems = () => {
  return (
    <View style={AlignItemsStyle.container}>
      <View
        style={{
          backgroundColor: 'red',
        }}>
        <Text style={AlignItemsStyle.textStyle}>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'orange',
        }}>
        <Text style={AlignItemsStyle.textStyle}>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
        }}>
        <Text style={AlignItemsStyle.textStyle}>3</Text>
      </View>
    </View>
  );
};

export default AlignItems;

const AlignItemsStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 37,
  },
});
