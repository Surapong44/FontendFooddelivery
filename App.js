import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import "react-native-gesture-handler";
import React from "react";
import { StatusBar} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "./src/redux/store"
import { Provider } from "react-redux"
import COLORS from "./src/consts/colors";
import BottomNavigator from "./src/views/navigation/BottomNavigator";
import DetailsScreen from "./src/views/screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  const RootApp = () => {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <Provider store={store}>
      <RootApp/>
    </Provider>
  );
};
