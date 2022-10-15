import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function CardPlanta({ data }) {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "center",
        itemsCenter: "flex-end",
        flexDirection: "row",
        

      }}
    >
      <View
          style={{
            backgroundColor: "#32A060",
            width: 330,
            paddingHorizontal: 10,
            paddingVertical: 25,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            marginBottom: 5,
          }}
        >
          <View style={{ alignSelf: "flex-end", alignItems: "flex-end", flexDirection: "row",  position : "absolute",zIndex: 1}}>
            <View style={{
              backgroundColor: "white", 
              width: 40,
              height: 40, 
              borderRadius: 25, 
              flexDirection:"row", 
              justifyContent: "center", 
              alignItems: "center", 
              marginRight: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 22,
                height: 22,
              },
              shadowOpacity: .51,
              shadowRadius: 35,

              elevation: 12,      
            }}>


              <Image source={data.image1} style={{
                height: 20,
                width: 20,

              }}
              />
              </View>
              <View style={{
                backgroundColor: "white", 
                width: 40,
                height: 40, 
                borderRadius: 25, 
                flexDirection:"row", 
                justifyContent: "center", 
                alignItems: "center", 
                marginRight: -20,
                marginTop: 40,
                shadowColor: "#000",
                shadowOffset: {
                  width: 22,
                  height: 22,
                },
                shadowOpacity: 0.51,
                shadowRadius: 35,

                elevation: 10,
                
              }}>
              <Image source={data.image} style={{
                height: 30,
                width: 30,
                tintColor : "#32A060",
                
              }}
                />
            </View>
          </View>
          <Text
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#fff",
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginBottom: 20,
              marginTop: 0,
              marginLeft: 15,
              width: 150,
            }}
          >
            {data.name}
          </Text>
          <Text style={{ color: "white", 
          fontSize: 14, 
          width: 200, 
          marginBottom: 10,
          marginLeft: 15,
          
        }}>
            {data.description}
          </Text>
        </View>
    </View>
  );
}
