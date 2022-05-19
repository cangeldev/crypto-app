import React from "react";
import { View, Text, TextInput, } from "react-native"
import style from "./style";
import IconI from "react-native-vector-icons/Ionicons";
import colors from "../assets/colors/colors";

import { SliderBox } from "react-native-image-slider-box";
import CustomFlatlist from "../sharedComponents/customflatlist/customflatlist";
export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../assets/images/bitcoin.jpg'),
                require('../assets/images/ethereum.jpg'),
                require('../assets/images/slp.jpg'),
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
                    <IconI name="notifications" size={30} color={colors.white} />
                </View>

                <SliderBox
                    disableOnPress="true"
                    images={this.state.images}
                    dotColor="gray"
                    autoplay
                    resizeMode="stretch"
                    circleLoop
                    sliderBoxHeight={160}
                    ImageComponentStyle={{ borderRadius: 14, width: '92%', marginTop: 8 }}
                />
                <CustomFlatlist title={"Top movers"} />

            </View>

        )
    }
}