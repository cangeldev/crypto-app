import React from "react";
import {View,Text,TextInput} from"react-native"
import colors from "../../assets/colors/colors";
import style from "./style"
import CoinFavoriteListFlatlist from "../../sharedComponents/coinFavoriteList/coinFavoriteListFlatlist/coinFavoriteListFlatlist"
function OtherScreen(){
    return(
        <View  style={{flex:1}} >
            <View style={style.headerView}>
                    <TextInput style={style.textInput}
                        placeholder="Search"
                        placeholderTextColor={colors.white}
                        inlineImageLeft="Search"
                        inlineImagePadding={20}
                    />
                </View>
                <CoinFavoriteListFlatlist title={"Coin Listesi"} price={"Fiyat"} change={"Değişim"} />               
        </View>
    )
}
export default OtherScreen