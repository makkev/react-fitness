import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import TrySlider from "./playground/TrySlider";

export default class App extends React.Component {
  render() {
    return (
      // <View>
      //   <AddEntry />
      // </View>
      <TrySlider />
    );
  }
}
