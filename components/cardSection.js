import React from 'react';
import {Text, View} from 'react-native';


const CardSection =(props)=>{

    return (<View style={style.containerStyle}>
      {props.children}
    </View>)
}

const style={
  
    containerStyle:{
        borderColor:'#ddd',
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative'
    }
} 

export default CardSection;