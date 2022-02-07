import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

const SwitchDemo = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    console.log(!isEnabled);
    setIsEnabled(!isEnabled);
  };
  return (
    <View style={SwitchDemoStyle.container}>
      <Switch
        thumbColor={isEnabled ? 'green' : 'orange'}
        trackColor={{true: 'powderblue', false: 'skyblue'}}
        value={isEnabled}
        onValueChange={() => toggleSwitch()}
      />
    </View>
  );
};

export default SwitchDemo;

const SwitchDemoStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
