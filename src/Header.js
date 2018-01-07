// import
import React from 'react';
import { View, Text } from 'react-native';

//make Component
const Header = (props) => {
  const { ViewStyle, TextStyle } = styles;
  return (
    <View style={ViewStyle}>
      <Text style={TextStyle}>
          {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  ViewStyle: {
    flex: 0.2,
    height: 60,
    padding: 24,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    },

  TextStyle: {
    fontSize: 20,
  }
};

//export

export default Header;
