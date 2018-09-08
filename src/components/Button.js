/* eslint-disable eol-last */

import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
//import axios from 'axios';

const Button = (props) => {
const { textStyle } = Styles;
    return (
        <TouchableOpacity 
        onPress={props.onPress}
        style={Styles.buttonStyle}
        >
    <Text style={textStyle}>Buy Now</Text>
    </TouchableOpacity>
);
  };

  const Styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        shadowColor: '#007aff',
        shadowOffset: { height: 1 },
    shadowOpacity: 0.5,
        borderColor: '#007aff',
        marginLeft: 100,
        marginRight: 100
    }
};

export default Button;