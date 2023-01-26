import { View, StyleSheet, Animated } from "react-native";
import COLORS from "../../consts/colors";
import React from "react";
import { useOrientation } from "../../hooks/useOrientation";

const Paginator = ({ data, scrollX }) => {
  const orientation = useOrientation();

  return (

      <View style={{ flexDirection: "row", height: 64 }}>
        {data.map((_, item) => {
          const inputRange = [
            (item - 1) * orientation.width,
            item * orientation.width,
            (item + 1) * orientation.width,
          ];

          const dotWidht = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={{ ...styles.dot, width: dotWidht, opacity }}
              key={item.toString()}
            />
          );
        })}
      </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: COLORS.primary,
  },
});
