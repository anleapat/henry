import React from 'react';
import {Image, ImageBackground, ScrollView} from 'react-native';
import imageData from '../../data/imageData.json';

const InstagramLikeScrollView = () => {
  const getImages = () => {
    const images: any[] = [];
    imageData.forEach((img, idx) => {
      images.push(
        <ImageBackground
          key={idx}
          style={{width: 107, height: 107, borderRadius: 107, marginLeft: 3}}
          source={require('../../images/circle.png')}>
          <Image
            source={{uri: img.icon}}
            style={{
              width: 97,
              height: 97,
              borderRadius: 97,
              margin: 5,
              borderColor: '#e6cadd',
              borderWidth: 1,
            }}></Image>
        </ImageBackground>,
      );
    });
    return images;
  };
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {getImages()}
    </ScrollView>
  );
};

export default InstagramLikeScrollView;
