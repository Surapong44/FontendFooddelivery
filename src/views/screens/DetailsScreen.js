import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";
import { SecondaryButton } from "../components/Button";
import { useOrientation } from "../../hooks/useOrientation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  const orientation = useOrientation();
  const rating = item.star;
  const dispatch = useDispatch();

  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Detail</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            ...styles.productImage,
            height: orientation.height > 500 ? 300 : 150,
          }}
        >
          <Image
            source={item.image}
            style={{
              height: orientation.height > 500 ? 220 : 100,
              width: orientation.height > 500 ? 220 : 100,
            }}
          />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.white }}
            >
              {item.name}
            </Text>
            <View style={styles.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            {rating.map((_, index) => (
              <Icon key={index} name="star" color={COLORS.yellow} size={25} />
            ))}
          </View>
          <Text style={styles.detailsText}>
            Hi, guys in this video we will build this food app UI using react
            native. Please if you like this video please give it thumbs up and
            also if you have not subscribed to my channel please try and
            subscribe thanks.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton
              title="Add to cart"
              onPress={() => dispatch(addToCart(item) , navigation.navigate("Cart"))}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  productImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default DetailsScreen;
