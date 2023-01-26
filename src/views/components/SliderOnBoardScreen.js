import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import COLORS from "../../consts/colors";
import { useOrientation } from "../../hooks/useOrientation";


export const SliderOnBoardScreen = ({ item }) => {
  const orientation = useOrientation();

  return (
    <View
      style={{
        width: orientation.width,
        ...styles.container,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={{ height: orientation.height > 500 ? 400 : 140 }}>
        <Image
          source={item.image}
          style={{
            ...styles.image,
            width: orientation.width,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text
            style={{
              fontSize: orientation.height > 500 ? 32 : 20,
              ...styles.title,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: orientation.height > 500 ? 18 : 15,
              ...styles.description,
            }}
          >
            {item.description}
          </Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    marginTop: 20,
    textAlign: "center",
    color: COLORS.grey,
  },
});
