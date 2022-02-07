import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';

const colors = ['red', 'blue', 'purple', 'green', 'skyblue', 'orange'];
const vWidth = Dimensions.get('window').width;
const vHeight = Dimensions.get('window').height;

const ScrollViewDemo = () => {
  const getViews = () => {
    const views: any[] = [];
    colors.forEach((color, idx) => {
      views.push(
        <View
          key={idx}
          style={{
            backgroundColor: color,
            width: vWidth,
            height: vHeight,
          }}></View>,
      );
    });
    return views;
  };
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {getViews()}
    </ScrollView>
  );
};

export default ScrollViewDemo;
