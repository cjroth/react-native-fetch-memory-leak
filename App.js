import React, { Component } from 'react';
import { Text, View } from 'react-native';


// THE MEMORY LEAK
const main = async () => {
  
  for (let i = 0; i < 100; i++) {

    // Replace me with a link to a large file
    await fetch('https://facebook.com/', {
      mode: 'no-cors',
    });
    // console.log('fetched', i)
  }

};

main();


export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Memory Leak Demo</Text>
      </View>
    );
  }
}