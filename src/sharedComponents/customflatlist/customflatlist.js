import React from 'react';
import { Text, FlatList, View } from 'react-native';
import veri from "../../assets/data.json"
import Card from '../card/card';
import style from './style';
function CustomFlatlist({ title }) {
    const renderCard = ({ item }) => <Card card={item} />
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