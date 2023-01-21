import React from "react";
import COLORS from "../../consts/colors";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useOrientation } from "../../hooks/useOrientation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

export const Card = ({ food }) => {
  const navigation = useNavigation();
  const orientation = useOrientation();
  const dispatch = useDispatch();

  return (
    <TouchableHighlight
      underlayColor={COLORS.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailsScreen", food)}
    >
      <View
        style={{...styles.card, height: orientation.height > 500 ? 220 : 90}}
        width={orientation.width < 700 ? cardWidth : orientation.width / 2.12}
      >
        <View style={{ alignItems: "center", top: -40 }}>
          <Image
            source={food.image}
            style={{
              height: orientation.width < 700 ? 120 : 90,
              width: orientation.width < 700 ? 120 : 90,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: orientation.height > 500 ? 18 : 12
            , fontWeight: "bold",
            marginTop: orientation.height > 500 ? 5 : -31

            }}>{food.name}</Text>
          <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
            {food.ingredients}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            ${food.price}
          </Text>
          <View style={styles.addToCartBtn}>
            <Icon name="add" size={20} color={COLORS.white}  
              onPress={() => dispatch(addToCart(food))}
             />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
