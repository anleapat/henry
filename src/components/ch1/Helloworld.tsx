import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Helloworld = ({route}: any) => {
  const {rn} = route.params;
  return (
    <View style={HelloworldStyle.container}>
      <Text style={HelloworldStyle.textStyle}>Hello world!!{rn}</Text>
    </View>
  );
};

export default Helloworld;

const HelloworldStyle = StyleSheet.create({
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
});
