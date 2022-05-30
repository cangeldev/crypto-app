import { Text, View, Image } from 'react-native'
import React from 'react'
import style from './style'
import IconA from "react-native-vector-icons/AntDesign";
import colors from '../../../assets/colors/colors';

export default function CoinTopListCard({ card }) {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={{ uri: card.imageUrl }} style={style.image}/>
                <Text numberOfLines={1} style={style.price}>{card.price}</Text>
            </View>
            <Text numberOfLines={1} style={style.coinName}>{card.coinName}</Text>
            <View style={style.description}>
                <IconA name="linechart" size={18} color={colors.green} />
                <Text numberOfLines={1} style={style.chance}>{card.change}</Text>
            </View>
        </View>
    )
}
