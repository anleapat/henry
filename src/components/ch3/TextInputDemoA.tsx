import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

const dimensions = Dimensions.get('window');
const textInputWidth = dimensions.width * 0.97;

const TextInputDemoA = () => {
  return (
    <View style={TextInputDemoAStyle.container}>
      <TextInput
        placeholder={'placeholder and placeholderTextColor'}
        placeholderTextColor={'green'}
        style={TextInputDemoAStyle.textInputStyle}></TextInput>
      <TextInput
        placeholder={'defaultValue'}
        defaultValue={'37'}
        style={TextInputDemoAStyle.textInputStyle}></TextInput>
      <TextInput
        placeholder={'not editable'}
        editable={false}
        style={TextInputDemoAStyle.textInputStyle}></TextInput>
      <TextInput
        placeholder={'autoFocus'}
        autoFocus={true}
        style={TextInputDemoAStyle.textInputStyle}></TextInput>
      <TextInput
        placeholder={'keyboardType'}
        keyboardType={'phone-pad'}
        style={TextInputDemoAStyle.textInputStyle}></TextInput>
      <TextInput
        placeholder={'maxLength'}
        maxLength={7}
        style={TextInputDemoAStyle.textInputStyle}></TextInput>
      <TextInput
        placeholder={'multiline'}
        textAlignVertical={'center'}
        multiline={true}
        style={{...TextInputDemoAStyle.textInputStyle, height: 73}}></TextInput>
      <TextInput
        placeholder={'secureTextEntry'}
        secureTextEntry={true}
        style={TextInputDemoAStyle.textInputStyle}></TextInput>
      <TextInput
        placeholder={'textAlign: left(default) center rihgt'}
        textAlign={'right'}
        style={TextInputDemoAStyle.textInputStyle}></TextInput>
    </View>
  );
};

export default TextInputDemoA;

const TextInputDemoAStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'green'
    flex: 1,
  },
  textInputStyle: {
    width: textInputWidth,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 7,
  },
});
