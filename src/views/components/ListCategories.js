import React from "react";
import cetagories from "../../consts/categories";
import COLORS from "../../consts/colors";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useOrientation } from "../../hooks/useOrientation";

export const ListCategories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const orientation = useOrientation();
  console.log(selectedCategoryIndex)

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{...styles.categoriesListContainer, paddingVertical: orientation.height > 500 ? 30 : 6 ,}}
    >
      {cetagories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <View
            style={{
              backgroundColor:
                selectedCategoryIndex == index
                  ? COLORS.primary
                  : COLORS.secondary,
              ...styles.categoryBtn,
            }}
          >
            <View style={styles.categoryBtnImgCon}>
              <Image source={category.image} style={styles.imagesCategory} />
            </View>
            <Text
              style={{
                color:
                  selectedCategoryIndex == index
                    ? COLORS.white
                    : COLORS.primary,
                ...styles.categoryName,
              }}
            >
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    categoriesListContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
      },
      categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: "center",
        paddingHorizontal: 5,
        flexDirection: "row",
      },
      categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
      },
      imagesCategory: {
        height: 35,
        width: 35,
        resizeMode: "cover",
      },
      categoryName: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
      },
});