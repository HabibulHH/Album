import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail=({album})=>{
    const {title,artist,thumbnail_image,image,url}=album;
return (
    <Card>
        <CardSection>
            <View style={style.thumbnail_container_style}>
                <Image
                 style={style.thumbnail_style} 
                 source={{uri:thumbnail_image}}/>
            </View>
           <View style={style.headerContentStyle}>

                <Text style={style.artist_tag}>
                    {title}
                </Text>
                <Text>
                    {artist}
                </Text>

           </View>
        </CardSection>
         <CardSection>
        <Image source={{uri:image}}  style={style.cover_image_style}/>

         </CardSection>
         <CardSection>
             <Button onPress={()=>Linking.openURL(url)} />
         </CardSection>
        </Card>
    )
}

const style={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    artist_tag:{
        fontSize:18
    },
    thumbnail_style:{
        height:50,
        width:50
    },
    thumbnail_container_style:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    cover_image_style:{
        height:300,
        flex:1,
        width:null
    }    
}
export default AlbumDetail;
