import React from 'react';
import { View, Text } from 'react-native';
const OutputPlace = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle} numberOfLines={2} ellipsizeMode={'head'}>
        { props.textOutput }
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1.5,
    padding: 18
  },
  
  textStyle: {
    fontSize: 52,
    lineHeight: 60,
    fontWeight: '300'
  }
};

export default OutputPlace;
