/* eslint-disable eol-last */

import { Text } from 'react-native';
import React from 'react';

const Header = (props) => {
const { textStyle } = Styles;
    return <Text style={textStyle}>{props.HeaderText}</Text>;
  };

const Styles = {
    textStyle: {
        fontSize: 20
    }
};

export default Header;