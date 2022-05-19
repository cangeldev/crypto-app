import React from "react";
import { View, Text, FlatList } from "react-native"
import veri from "../assets/news_banner_data.json"
import veri2 from "../assets/news_data.json"
import NewsCard from "../sharedComponents/cards/news_card/news_card";
import style from "./style";
import colors from "../assets/colors/colors";
import IconI from "react-native-vector-icons/Ionicons";

function NewsScreen() {
    const renderNews = ({ item }) => <NewsCard card={item} />

    return (
        <View>

            <FlatList renderItem={renderNews} ListHeaderComponent={
                <View View style={style.headerView} >
                    <Text style={style.headerTitle}>
                        Crypto News
                    </Text>
                    <IconI name="search" size={30} color={colors.white} />
                </View>
            } data={veri2} />
        </View>
    )
}
export default NewsScreen



