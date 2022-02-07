import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const dimensions = Dimensions.get('window');
const textInputWidth = dimensions.width * 0.97;

const TextInputDemoB = () => {
  const [textInputBorderColor, setTextInputBorderColor] = useState('skyblue');
  const [textInputValue, setTextInputValue] = useState('');
  const [text, setText] = useState('');

  const printValue = (val: string) => {
    console.log('before value=' + textInputValue);
    console.log('new value=' + val);
    setTextInputValue(val);
  };

  return (
    <View style={TextInputDemoBStyle.container}>
      <TextInput
        onFocus={() => setTextInputBorderColor('orange')}
        onBlur={() => setTextInputBorderColor('skyblue')}
        onChangeText={val => printValue(val)}
        placeholder={'onFocus onBlur onChangeText'}
        onPressOut={() => console.log('onPressOut')}
        onPressIn={() => console.log('onPressIn')}
        style={{
          ...TextInputDemoBStyle.textInputStyle,
          borderColor: textInputBorderColor,
        }}></TextInput>

      <View
        style={[
          TextInputDemoBStyle.textInputStyle,
          TextInputDemoBStyle.textInputViewStyle,
        ]}>
        <TextInput
          value={text}
          onChangeText={val => setText(val)}
          placeholder={'custom TextInput'}
          style={{width: '97%'}}></TextInput>
        <TouchableOpacity onPress={() => setText('')}>
          <Text
            style={{
              ...TextInputDemoBStyle.clearBtnStyle,
              display: text.length > 0 ? 'flex' : 'none',
            }}>
            X
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextInputDemoB;

const TextInputDemoBStyle = StyleSheet.create({
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
  textInputViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearBtnStyle: {
    fontSize: 20,
    marginRight: 7,
  },
});
