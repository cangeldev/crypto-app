import { Text, View, Image } from 'react-native'
import React from 'react'
import style from './style'
import IconI from "react-native-vector-icons/Ionicons";
import colors from '../../assets/colors/colors';

export default function CoinCard({ card }) {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image style={style.image} />
                <Text numberOfLines={1} style={style.price}>{card.price}</Text>
            </View>
            <Text numberOfLines={1} style={style.coinName}>{card.coinName}</Text>
            <View style={style.description}>
                <IconI name="stats-chart" size={20} color={colors.white} />
                <Text numberOfLines={1} style={style.chance}>{card.chance}</Text>
            </View>
        </View>
    )
}
