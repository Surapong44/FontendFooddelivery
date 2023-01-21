import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { cartTotalPriceSelector } from "../../redux/selectors";


const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(clear()) },
      ],
      { cancelable: false }
    );
  };

  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View style={styles.conName}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.ingredientsName}>{item.ingredients}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {item.quantity}
          </Text>
          <View style={styles.actionBtn}>
            <Icon
              name="remove"
              size={25}
              color={COLORS.white}
              onPress={() => {
                if (item.quantity === 1) {
                  dispatch(removeItem(item.id));
                  console.log("remove");
                  return;
                } else {
                  dispatch(decrement(item.id));
                }
              }}
            />
            <Icon
              name="add"
              size={25}
              color={COLORS.white}
              onPress={() => dispatch(increment(item.id))}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={styles.text}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        keyExtractor={(item) => item.id}
        data={cart}
        renderItem={CartCard}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity onPress={AlertItem}>
              <Text style={styles.storeItemPrice}>Clear cart</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                ${totalPrice}
              </Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.white,
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  conName: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  ingredientsName: {
    color: COLORS.grey,
    fontSize: 13,
  },
  price: {
    fontWeight: "bold",
    fontSize: 17,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
  },
});

export default CartScreen;
