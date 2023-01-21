import "react-native-gesture-handler";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import CartScreen from "../screens/CartScreen";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../redux/selectors";
import IconBadge from "react-native-icon-badge";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const total = useSelector(cartTotalSelector);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.search}>
              <Icon name="search" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            (
              <IconBadge
                MainElement={
                  <Icon name="shopping-cart" color={color} size={28} />
                }
                BadgeElement={
                  <Text style={{ color: "white", fontSize: 12 }}>{total}</Text>
                }
                IconBadgeStyle={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#ff0000",
                  margin: -6,
                }}
                Hidden={total===0}
              />
            )
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  search: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 30,
    top: -25,
    elevation: 5,
  },
});
