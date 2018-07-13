import React from 'react';
import {ScrollView} from 'react-native';
import axois from 'axios';
import AlbumDetail from './albumDetail';


class  AlbumList extends React.Component{

    
        state={albums:[]}
    

    componentWillMount(){
        axois.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(resposnse=>this.setState({
            albums:resposnse.data
        }))
    }
    renderAlbums(){
        return this.state.albums.map(album=>
        <AlbumDetail album={album} key={album.title}/>)
    }
    render(){
        

        return (<ScrollView>{this.renderAlbums()}</ScrollView>)
    }
}

export default AlbumList;
