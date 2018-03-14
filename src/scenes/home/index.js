import React from "react";
import { View, Text } from "react-native";
import ListObjetcs from './components/list-objects'

const HomeScreen = (props) => {
  const navigationOptions = {
    title: 'Planos'
  };
  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <ListObjetcs />
    </View>
  );
};

export default HomeScreen;
