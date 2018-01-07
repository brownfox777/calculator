import React from 'react';
import { View, Text } from 'react-native';

const HistoryLine = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text 
            style={styles.textStyle}
            numberOfLines={1}
            ellipsizeMode='head'
            >
                { props.historyContent }
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 30,
        backgroundColor: '#708090',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        textAlign: 'right' 
    }
}

export default HistoryLine;