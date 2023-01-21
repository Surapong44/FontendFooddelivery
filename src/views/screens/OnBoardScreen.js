import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import COLORS from "../../consts/colors";
import { useOrientation } from "../../hooks/useOrientation";
import { PrimaryButton } from "../components/Button";

const OnBoardScreen = ({ navigation }) => {
  const orientation = useOrientation();
  console.log(["height " + orientation.height ,"width " + orientation.width])

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: orientation.height > 500 ? 400 : 140 }}>
        <Image
          style={{
            resizeMode: "contain",
            width: orientation.height > 500 ? "100%" : "20%",
            top: orientation.height > 500 ? -150 : -300,
            marginLeft: orientation.height > 500 ? 0 : 320,
          }}
          source={require("../../assets/onboardImage.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text
            style={{
              fontSize: orientation.height > 500 ? 32 : 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: orientation.height > 500 ? 18 : 15,
              textAlign: "center",
              color: COLORS.grey,
            }}
          >
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate("Home")}
          title="Get Started"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

export default OnBoardScreen;
