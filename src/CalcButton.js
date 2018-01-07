import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CalcButton = ({ whenPressed, data = {} }) => {
	//console.log(data.text)
	const { text, color, knobFlex } = data;
	//console.log(text + id + typeof(text))

  const styles = {
		knobStyle: {
			flex: knobFlex,
			justifyContent: 'center',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: '#fff',
			borderRadius: 10,
			backgroundColor: color
		},

		textStyle: {
			fontSize: 36,
			fontWeight: '300'
		}
  };

	return (
		<TouchableOpacity
			onPress={whenPressed}
			style={styles.knobStyle}
		>
			<Text style={styles.textStyle} >
				{text}
			</Text>			
		</TouchableOpacity>
		);
};

export default CalcButton;
