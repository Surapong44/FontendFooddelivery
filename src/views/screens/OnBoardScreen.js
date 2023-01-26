import React, { useRef } from "react";
import slides from "../../consts/slider";
import { FlatList, Animated, View, StyleSheet } from "react-native";
import { SliderOnBoardScreen } from "../components/SliderOnBoardScreen";
import Paginator from "../components/Paginator";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../components/Button";
import { useOrientation } from "../../hooks/useOrientation";

const OnBoardScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const orientation = useOrientation();


  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <SliderOnBoardScreen item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}

          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <View
        style={{
          paddingBottom: orientation.height > 500 ? 50 : 5,
          width: orientation.height > 500 ? 200 : 400,
        }}
      >
        <PrimaryButton
          onPress={() => navigation.navigate("Home")}
          title="Get Started"
        />
      </View>
    </View>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
});
