import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function CardPlanta({ data }) {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        marginTop: 50,
        marginBottom: 50,
        justifyContent: "center",
        itemsCenter: "flex-end",
        flexDirection: "row",
      }}
    >
      <Pressable onPress={() => navigate(data.link)}>
        <View
          style={{
            backgroundColor: "#32A060",
            width: 250,
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderRadius: 25,
            marginRight: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={data.image} />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginBottom: 10,
              // marginRight: 100,
              marginTop: 30,
            }}
          >
            {data.name}
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            {data.description}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
