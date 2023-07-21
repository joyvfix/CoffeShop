import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';
import {coklat2, grey, greyyoung} from '../utils/color';

const Firstpage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Rootstakparams>>();
  setTimeout(() => {
    navigation.replace('login');
  }, 2500);

  return (
    <View style={styles.mainpage}>
      <Image
        source={require('../assets/icon/coffetext-removebg-preview.png')}
        style={styles.firsticon}
      />
      {/* <Text style={styles.textfirst}>CoffeShop</Text> */}
    </View>
  );
};

export default Firstpage;

const styles = StyleSheet.create({
  firsticon: {
    width: 150,
    height: 150,
    right: 15,
    top: 10,
  },
  mainpage: {
    flex: 1,
    backgroundColor: coklat2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textfirst: {
    top: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
});
