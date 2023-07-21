import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';
import {black, coklat, green, red, white} from '../utils/color';

const GetStarted = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Rootstakparams>>();

  return (
    <View>
      {/* <Text>GetStarted</Text> */}
      <Image
        source={require('../assets/image/istockphotocoffea.webp')}
        style={styles.firsticon}
      />
      <Text style={styles.textawal}>ENJOY THE TASTE OUR BEST COFFE</Text>
      <TouchableOpacity onPress={() => navigation.navigate('homescreen2')}>
        <Text style={styles.textdetail4}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  firsticon: {
    width: 500,
    height: 791,
    right: 15,
    // top: 10,
  },
  textawal: {
    display: 'flex',
    color: white,
    // backgroundColor: green,
    letterSpacing: 5,
    left: 30,
    fontWeight: 'bold',
    width: 400,
    fontSize: 35,
    bottom: 250,
  },
  textdetail4: {
    elevation: 7,
    width: 170,
    height: 50,
    left: 110,
    bottom: 200,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: white,
    // top: 10,
    borderColor: black,
    backgroundColor: coklat,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    paddingTop: 15,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
});
