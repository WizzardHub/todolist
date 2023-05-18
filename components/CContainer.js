import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});

const CContainer = ({children}) => {
  return (
    <View style={styles.container}>{children}</View>
  );
};

export default CContainer;