import { View, Text, Image } from 'react-native'
import React from 'react'
import style from "./style"
import colors from '../../../assets/colors/colors'
import IconI from "react-native-vector-icons/Ionicons";
export default function CoinFavoriteListCard({ card }) {
  const [active, setActive] = React.useState(true)
  return (
    <View style={style.container}>
      <Image source={{ uri: card.imageUrl }} style={style.image} />
      <Text numberOfLines={1} style={style.name}>{card.coinName}</Text>
      <View style={style.changeView}>
        <Text numberOfLines={1} style={style.changeText}>{card.price}</Text>
        <Text numberOfLines={1} style={[style.changeText, { backgroundColor: colors.green, color: colors.white }]}>
          {card.change}</Text>
        <IconI name="star" size={30} color={`${active ? colors.yellow : colors.grey1}`}
          onPress={() => setActive(!active)}
        />
      </View>
    </View>
  )
}