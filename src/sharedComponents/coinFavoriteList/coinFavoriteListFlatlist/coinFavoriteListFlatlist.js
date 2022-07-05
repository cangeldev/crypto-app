import { View, Text, FlatList } from 'react-native'
import React from 'react'
import veri from "../../../assets/data.json"

import style from './style'
import CoinFavoriteListCard from "../coinFavoriteListCard/coinFavoriteListCard"
const CoinFavoriteListFlatlist = ({ title, price, change }) => {
    const renderCard = ({ item }) => <CoinFavoriteListCard card={item} />
    return (
        <View style={{ flex: 1 }}  >
            <View style={style.container}>
                <Text style={style.text}>{title}</Text>
                <View style={style.changeView}>
                    <Text style={style.text}>{price}</Text>
                    <Text style={style.text}>{change}</Text>
                </View>
            </View>
            <FlatList
                data={veri}
                renderItem={renderCard}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default CoinFavoriteListFlatlist