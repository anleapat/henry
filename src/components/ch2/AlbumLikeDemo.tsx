import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import imageData from '../../data/imageData.json';

const dimensions = Dimensions.get('window');
const rowNum = 3;
const mLeftWidth = 7;
const imgWidth = (dimensions.width - (rowNum + 1) * mLeftWidth) / rowNum;

const AlbumLikeDemo = () => {
  return <View style={AlbumLikeDemoStyle.container}>{getImages()}</View>;
};

const getImages = () => {
  const imgs: any[] = [];
  imageData.forEach((item, index) => {
    imgs.push(
      <View key={index} style={{marginLeft: mLeftWidth}}>
        <Image style={AlbumLikeDemoStyle.imgStyle} source={{uri: item.icon}} />
        <Text style={{backgroundColor: 'grey', textAlign: 'center'}}>
          {item.name}
        </Text>
      </View>,
    );
  });
  return imgs;
};

export default AlbumLikeDemo;

const AlbumLikeDemoStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgStyle: {
    width: imgWidth,
    height: 137,
  },
});
