import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';


import RecipeNavigator from "./navigation/RecipeNavigation";
import mealsReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer, composeWithDevTools());


const fetchFonts = () => {
  return Font.loadAsync({
    "ms-new-tai-lue": require("./assets/fonts/microsoft-new-tai-lue-regular.ttf"),
    "ms-new-tai-lue-bold": require("./assets/fonts/microsoft-new-tai-lue-bold.ttf")
  });
}

export default function App() {
  // STATES
  const [fontLoaded, setFontLoaded] = useState(false);



  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => { setFontLoaded(true); }} />;
  }


  // CONTENT
  return (
    <Provider store={store}>
      <RecipeNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
