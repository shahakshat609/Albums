/* eslint-disable eol-last */

import { ScrollView, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        console.log('Component will mount in AlbumList..');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response =>
                this.setState({
                    albums: response.data
                }) 
        );
}

renderAlbums() {
return this.state.albums.map(album => <AlbumDetail key={album.title} data={album} />);
}
    render() {
        return (
            <ScrollView >
                {this.renderAlbums()}
                </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
   viewStyles: {
       
       alignItems: 'center',
    
   },
   textStyles: {
        fontSize: 15
   }
});

export default AlbumList;