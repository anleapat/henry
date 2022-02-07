import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import imageData from '../../data/imageData.json';

const ImageDemo = () => {
  return (
    <View style={ImageDemoStyle.container}>
      <Image source={require('../../images/sunshine.jpg')} />
      <Image
        style={ImageDemoStyle.imgStyle}
        source={{uri: 'http://192.168.1.37/img/1.png'}}
      />
      {getImages()}
    </View>
  );
};

const getImages = () => {
  const imgs: any[] = [];
  imageData.forEach((item, idx) => {
    imgs.push(
      <Image
        key={idx}
        style={ImageDemoStyle.imgStyle}
        source={{uri: item.icon}}
      />,
    );
  });
  return imgs;
};

export default ImageDemo;

const ImageDemoStyle = StyleSheet.create({
  container: {},
  imgStyle: {
    width: 73,
    height: 73,
    borderRadius: 73,
    borderWidth: 3,
    borderColor: 'orange',
  },
});
