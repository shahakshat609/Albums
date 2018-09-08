/* eslint-disable eol-last */

import React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ data }) => {

    const { title, artist, thumbnail_image, image, url } = data;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                    style={styles.thumbnailStyle}
                    source={{ uri: thumbnail_image }} 
                    />
                </View>

                <View style={styles.headerContentStyles}>
        <Text style={styles.TextStyle}>{title}</Text>
        <Text>{artist}</Text>
                </View>
        </CardSection>

        <CardSection>
            <View>
                <Image 
                style={styles.imageStyles}
                source={{ uri: image }} 
                />

            </View>
        </CardSection>
        <CardSection><Button onPress={() => Linking.openURL(url)} /></CardSection>
         </Card>
        
    );
};

const styles = StyleSheet.create({
    headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    TextStyle:
    {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 60,
        width: 60,
        marginRight: 25,
        marginLeft: 10,

    },
    imageStyles: 
    {
        height: 300,
        width: 330
       
        }
});
export default AlbumDetail;