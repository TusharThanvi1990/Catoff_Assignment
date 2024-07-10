import react, { Children } from "react";
import { ImageBackground } from "react-native";
import { View ,StyleSheet} from "react-native";

const Background = ({children}) =>{
    return(
        <View>
            <ImageBackground source={require("./images/Backgroundimg.jpg") }  style= {{height:'auto'}}/>
            <View style={{position:"absolute"}}>{children}</View>
        </View>
    )

}

export default Background