import { View, Text, Image } from 'react-native'
import React from 'react'
import style from "./style"
import colors from '../../../assets/colors/colors'
export default function CoinListCard({ card }) {
  return (
    <View style={style.container}>
      <Image source={{ uri: card.imageUrl }} style={style.image} />
      <Text numberOfLines={1} style={style.name}>{card.coinName}</Text>
      <View style={style.changeView}>
        <Text numberOfLines={1} style={style.changeText}>{card.price}</Text>
        <Text numberOfLines={1}
          style={[style.changeText, { backgroundColor:colors.green, color: colors.white }]}>
          {card.change}</Text>
      </View>
    </View>
  )
}

