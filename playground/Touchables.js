import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default class App extends React.Component {
  handlePress = () => {
    alert('Hello');
  }
  render() {
    return (
      <View style ={styles.container}>
        {/*
        <TouchableHighlight style={styles.btn}
          onPress={this.handlePress}
          underlayColor='#d4271b'
        >
        <TouchableOpacity style={styles.btn}
          onPress={this.handlePress}
        >
          <Text style={styles.btnText}>touchable Highlight</Text>
        </TouchableHighlight>      
        */}

        <TouchableOpacity style={styles.btn}
        >
          <Text style={styles.btnText}>touchable Highlight</Text>
        </TouchableOpacity>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }

})