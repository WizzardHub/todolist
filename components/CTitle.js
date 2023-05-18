import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  title: {
    padding: 5,
    fontSize: 24,
    borderRadius: 5,
    color: '#1cb066',
    fontWeight: 'bold',
    backgroundColor: '#9bebc3'
  }
});

const CTitle = ({value}) => {
  return (
    <Text style={styles.title}>{value}</Text>
  );
};

export default CTitle;