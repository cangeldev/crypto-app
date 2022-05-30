import React from 'react';
import { Text, FlatList, View } from 'react-native';
import veri from "../../../assets/data.json"
import CoinTopListCard from '../coinTopListCard/coinTopListCard';
import style from './style';
function CustomFlatlist({ title }) {
    const renderCard = ({ item }) => <CoinTopListCard card={item} />
    return (
        <View style={style.container} >
            <Text style={style.title}>{title}</Text>
            <FlatList
                data={veri}
                renderItem={renderCard}
                horizontal
                showsHorizontalScrollIndicator={false}              
            />
        </View>

    )
}
export default CustomFlatlist