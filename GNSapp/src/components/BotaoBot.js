import { Pressable, Text, TouchableHighlight, View, Image} from "react-native";
import Harmony from '../assistente/Harmony.py';


const BotaoBot = () => {
    return (
        <View style={{ 
            justifyContent: "center",
            alignSelf: "flex-end",
            alignItems: "center",
            height: 80,
            width: 80,
            backgroundColor: "white",
            position: "absolute",
            bottom: 41,
            right: 8,
            borderRadius: 40,
            opacity: 0.6,
            elevation: 22,
            zIndex: 2,
  
            
            }}>
            <TouchableHighlight onPress={Harmony}>
              <Image source={require("../assets/Voice.png")}
                style={{
                  height: 50,
                  width: 50,
                  alignSelf: "center",
                  justifyContent: "center",
                  tintColor: "#32A060",
                }}
              />
            </TouchableHighlight>
          </View>
    );
};

export default BotaoBot;