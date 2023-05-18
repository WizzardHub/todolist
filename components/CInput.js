import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 290,
    padding: 10,
    borderWidth: 3,
    borderRadius: 5,
    marginRight: 10,
    borderColor: '#aefcd5',
  }
});

const CInput = ({value, placeholder, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
    );
};

export default CInput;