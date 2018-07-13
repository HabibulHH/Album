import React from 'react'
import {AppRegistry,View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/albumList';


const App = ()=>(
        <View style={{flex:1}}>
            <Header headername ={"Albums"}/>
            <AlbumList/>
        </View>
);


AppRegistry.registerComponent('albums', () => App);
