import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const NavigationList = ({navigation}: any) => {
  const [rn, setRn] = useState('');
  useEffect(() => {
    setRn('React Native');
  });
  return (
    <View style={NavigationListStyle.container}>
      <View style={{marginTop: 3}}>
        <Button
          title="HelloWorld"
          onPress={() => navigation.navigate('HelloWorld', {rn: rn})}
        />
      </View>
      <View style={{marginTop: 3}}>
        <Button
          title="AlbumLikeDemo"
          onPress={() => navigation.navigate('AlbumLikeDemo')}
        />
      </View>
      <View style={{marginTop: 3}}>
        <Button
          title="FacebookLikeLogin"
          onPress={() => navigation.navigate('FacebookLikeLogin')}
        />
      </View>
      <View style={{marginTop: 3}}>
        <Button
          title="InstagramLikeScrollView"
          onPress={() => navigation.navigate('InstagramLikeScrollView')}
        />
      </View>
      <View style={{marginTop: 3}}>
        <Button
          title="Networking"
          onPress={() => navigation.navigate('Networking')}
        />
      </View>
      <View style={{marginTop: 3}}>
        <Button
          title="FlatListDemo"
          onPress={() => navigation.navigate('FlatListDemo')}
        />
      </View>
      <View style={{marginTop: 3}}>
        <Button
          title="SectionListDemo"
          onPress={() => navigation.navigate('SectionListDemo')}
        />
      </View>
      <View style={{marginTop: 3}}>
        <Button
          title="ActivityIndicatorDemo"
          onPress={() => navigation.navigate('ActivityIndicatorDemo')}
        />
      </View>
    </View>
  );
};

export default NavigationList;

const NavigationListStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});
