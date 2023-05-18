/* TODO : put each style inside of it's corresponding button type */

import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingHorizontal: 12.5,
    justifyContent: 'center',
    backgroundColor: '#70dba5',
  },
  sButton: {
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, .5)',
  }
});

export const CButtonType = {
  Big: null,
  Default: styles.button,
  Small: styles.sButton
}