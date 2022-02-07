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
const textInputWidth = dimensions.width * 0.9;
const titleMarginTop = dimensions.height * 0.2;
const usernameMarginTop = dimensions.height * 0.18;
const textMarginTop = dimensions.height * 0.03;
const loginBtnHeight = dimensions.height * 0.06;

const FacebookLikeLogin = () => {
  const [usernameBorderColor, setUsernameBorderColor] = useState('white');
  const [passwordBorderColor, setPasswordBorderColor] = useState('white');
  const [user, setUser] = useState({username: '', password: ''});

  return (
    <View style={FacebookLikeLoginStyle.container}>
      <Text style={FacebookLikeLoginStyle.titleStyle}>facebook</Text>
      <TextInput
        placeholder={'Email or Phone'}
        autoFocus={true}
        style={{
          ...FacebookLikeLoginStyle.textInputStyle,
          marginTop: usernameMarginTop,
          borderColor: usernameBorderColor,
        }}
        onChangeText={uname => setUser({...user, username: uname})}
        onFocus={() => setUsernameBorderColor('orange')}
        onBlur={() => setUsernameBorderColor('white')}></TextInput>
      <TextInput
        placeholder={'Password'}
        secureTextEntry={true}
        style={{
          ...FacebookLikeLoginStyle.textInputStyle,
          marginTop: textMarginTop,
          borderColor: passwordBorderColor,
        }}
        onChangeText={pwd => setUser({...user, password: pwd})}
        onFocus={() => setPasswordBorderColor('orange')}
        onBlur={() => setPasswordBorderColor('white')}></TextInput>
      <TouchableOpacity onPress={() => console.log(user)}>
        <View
          style={{
            ...FacebookLikeLoginStyle.loginBtnStyle,
            marginTop: textMarginTop,
          }}>
          <Text style={FacebookLikeLoginStyle.loginBtnTextStyle}>Log In</Text>
        </View>
      </TouchableOpacity>
      <View style={FacebookLikeLoginStyle.signUpViewStyle}>
        <View style={{flex: 1}}>
          <TouchableOpacity>
            <Text style={FacebookLikeLoginStyle.signUpBtnStyle}>
              Sign Up for Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={FacebookLikeLoginStyle.helpBtnStyle}>?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FacebookLikeLogin;

const FacebookLikeLoginStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#3b5998',
    flex: 1,
  },
  titleStyle: {
    fontSize: 57,
    marginTop: titleMarginTop,
    color: 'white',
    fontWeight: 'bold',
  },
  textInputStyle: {
    width: textInputWidth,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 3,
  },
  loginBtnStyle: {
    backgroundColor: '#2c4988',
    width: textInputWidth,
    height: loginBtnHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  loginBtnTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpViewStyle: {
    flexDirection: 'row',
    width: textInputWidth,
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: dimensions.height - textMarginTop * 2,
  },
  signUpBtnStyle: {
    color: 'white',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  helpBtnStyle: {
    backgroundColor: '#2c4988',
    color: 'white',
    fontWeight: 'bold',
    width: 25,
    fontSize: 17,
    textAlign: 'center',
    borderRadius: 3,
  },
});
