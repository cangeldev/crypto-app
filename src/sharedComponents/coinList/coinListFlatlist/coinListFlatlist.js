import { View, Text, FlatList } from 'react-native'
import React from 'react'
import veri from "../../../assets/data.json"
import CoinListCard from '../coinListCard/coinListCard'
import style from './sytle'

const CoinListFlatlist = ({ title, price, change }) => {
    const renderCard = ({ item }) => <CoinListCard card={item} />
    return (
        <View style={{flex:1}}  >
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

export default CoinListFlatlist