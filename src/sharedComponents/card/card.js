import { Text, View, Image } from 'react-native'
import React from 'react'
import style from './style'

export default function Card({card}) {
    return (
        <View style={style.container}>
            <Image style={style.image}/>
            <Text>{card.coinName}</Text>        
          <Text>{card.price}</Text>
            <Text>{card.chance}</Text>
        </View>
    )
}
