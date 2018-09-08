
/* eslint-disable eol-last */

import { View, StyleSheet } from 'react-native';
import React from 'react';

const CardSection = (props) => {
return (
    <View style={styles.containerStyle}>
    {props.children}
        </View>
);
};

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    textConntainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
});

export default CardSection;