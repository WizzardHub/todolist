import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#70dba5',
    maxHeight: 200,
    borderRadius: 5,
    paddingHorizontal: 5
  }
});

const CFlatList = ({data, renderItem}) => {
  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={renderItem}
    />
    );
};

export default CFlatList;