import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CButton from "./CButton";
import {CButtonType} from "../enums/CButtonType";

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#70dba5',
    maxHeight: 200,
    borderRadius: 5,
    paddingHorizontal: 5
  },
  row: {
    flexDirection: 'row'
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
});

const CListItem = ({item, onPress}) => {
  return (
    <View style={[styles.row, styles.spaceBetween]}>
      <Text style={styles.item}>{item}</Text>
      <CButton value="Retirer" type={CButtonType.Small} onPress={onPress} />
    </View>
    );
};

export default CListItem;