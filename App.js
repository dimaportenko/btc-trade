import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main code="doge_uah" title="Doge" />
        <Main code="sib_uah" title="SIB" />
        <Main code="krb_uah" title="Karbowanec" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
