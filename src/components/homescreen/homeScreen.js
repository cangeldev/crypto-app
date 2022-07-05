import React from "react";
import { View, TextInput } from "react-native"
import IconF from "react-native-vector-icons/FontAwesome5";
import { SliderBox } from "react-native-image-slider-box";
import CustomFlatlist from "../../sharedComponents/coinTopList/coinTopListFlatlist/coinTopListFlatlist";
import colors from "../../assets/colors/colors";
import style from "./style";
import CoinListFlatlist from "../../sharedComponents/coinList/coinListFlatlist/coinListFlatlist";
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../assets/images/bitcoin.jpg'),
                require('../../assets/images/ethereum.jpg'),
                require('../../assets/images/slp.jpg'),
            ]
        };
    }
    render() {
        return (
            <View style={style.container}>
                <View style={style.headerView}>
                    <TextInput style={style.textInput}
                        placeholder="Search"
                        placeholderTextColor={colors.white}
                        inlineImageLeft="Search"
                        inlineImagePadding={20}
                    />
                    <IconF name="user-alt" size={30} color={colors.white} />
                </View>
                <SliderBox
                    disableOnPress="true"
                    images={this.state.images}
                    dotColor="gray"
                    autoplay
                    resizeMode="stretch"
                    circleLoop
                    sliderBoxHeight={160}
                    ImageComponentStyle={style.slider} />
                <CustomFlatlist title={"Top movers"} />
                <CoinListFlatlist title={"Coin Listesi"} price={"Fiyat"} change={"Değişim"} />
            </View>
        )
    }
}