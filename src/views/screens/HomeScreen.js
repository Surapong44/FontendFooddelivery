import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import foods from "../../consts/foods";
import { Card } from "../components/Card";
import { useOrientation } from "../../hooks/useOrientation";
import { ListCategories } from "../components/ListCategories";

const HomeScreen = () => {
  const orientation = useOrientation();
  console.log(["height " + orientation.height ,"width " + orientation.width])

  return (
    <View style={styles.container}>
      <View style={styles.header} height={orientation.height > 500 ? 70 : 30}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: orientation.height > 500 ? 28 : 20 }}>
              Hello,
            </Text>
            <Text
              style={{
                ...styles.name,
                fontSize: orientation.height > 500 ? 28 : 20,
              }}
            >
              Surapong
            </Text>
          </View>
          <Text
            style={{
              ...styles.detail,
              fontSize: orientation.height > 500 ? 22 : 16,
            }}
          >
            What do you want today
          </Text>
        </View>
        <Image
          source={require("../../assets/user-icon.png")}
          style={{
            ...styles.images,
            height: orientation.height > 500 ? 50 : 30,
            width: orientation.height > 500 ? 50 : 30,
          }}
        />
      </View>
      <View
        style={{
          ...styles.home,
          marginTop: orientation.height > 500 ? 40 : 10,
        }}
      >
        <View
          style={{
            ...styles.inputContainer,
            height: orientation.height > 500 ? 50 : 30,
          }}
        >
          <Icon name="search" size={orientation.height > 500 ? 28 : 15} />

          <TextInput
            style={{
              flex: 1,
              fontSize: orientation.height > 500 ? 18 : 15,
            }}
            placeholder="Search for food"
          />
        </View>
        <View
          style={{
            ...styles.sortBtn,
            height: orientation.height > 500 ? 50 : 30,
            width: orientation.height > 500 ? 50 : 30,
          }}
        >
          <Icon name="tune" color={COLORS.white} size={orientation.height > 500 ? 28 : 20} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  name: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  detail: {
    marginTop: 5,
    fontSize: 22,
    color: COLORS.grey,
  },
  images: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  home: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
