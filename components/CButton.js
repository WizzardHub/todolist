import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const styles = StyleSheet.create({
  value: {
    color: 'rgba(0, 0, 0, .4)',
    fontWeight: 'bold'
  }
});

const CButton = ({type, onPress, value}) => {
  return (
    <Pressable style={type} onPress={onPress} android_ripple={{color: 'rgba(255, 255, 255, .1)'}}>
      <Text style={styles.value}>{value}</Text>
    </Pressable>
    );
};

export default CButton;