import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Vibration,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {
  black,
  coklat,
  greenyoung,
  grey,
  red,
  white,
  youngblue,
} from '../utils/color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';
//   import HomeScreenFull from './HomeScreenFull';

const HomeScreen = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<Rootstakparams>>();

  return (
    <View style={styles.first}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/151/151917.png',
          }}
          style={styles.logomenu}
        />

        <Text style={styles.textheader}>Coffe Shop</Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/1827/1827504.png',
          }}
          style={styles.logonotif}
        />
      </View>
      <View style={styles.searching}>
        <Image
          style={styles.logosearch}
          source={require('../assets/icon/Vector.png')}
        />
        <TextInput
          placeholder="search coffe"
          style={styles.searchpass}></TextInput>
      </View>
      {/* {...............................................................................} */}
      <View style={styles.contener2}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.bungkus}>
            <View style={styles.viewman}>
              <Text style={styles.textman}>man</Text>
              <Image
                style={styles.potoman}
                source={require('../assets/image/aaa.png')}
              />
            </View>
            <View style={styles.viewwoman}>
              <Text style={styles.textwoman}>woman</Text>
              <Image
                style={styles.potowoman}
                source={require('../assets/image/womanhijab.png')}
              />
            </View>
            <View style={styles.vehicle}>
              <Text style={styles.textvehicle}>boy</Text>
              <Image
                style={styles.potovehicle}
                source={require('../assets/image/boys.png')}
              />
            </View>
            {/* <View style={styles.vehicle}>
              <Text style={styles.textvehicle}>boy</Text>
              <Image
                style={styles.potovehicle}
                source={require('../assets/image/blackjacket.png')}
              />
            </View> */}
          </View>
        </ScrollView>
      </View>
      {/* {......................................................................} */}
      <View style={styles.textmid}>
        <Text style={styles.textrecommended}>Recommended</Text>
        <TouchableOpacity
        //   onPress={() => Navigation.navigate('HomeScreenFull')}
        >
          <Text style={styles.textseeall}>See all</Text>
        </TouchableOpacity>
      </View>
      {/* {.......................................................................} */}
      <View style={styles.contener3}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewscrollunder}>
            <View style={styles.jacket}>
              <Image
                style={styles.potovjacket}
                source={require('../assets/image/cofeeee.jpg')}
              />
              <Text style={styles.textjaket}>Black Coffe</Text>
              <Text style={styles.textprice}>Rp. 7,499</Text>
            </View>
            <View style={styles.jacket}>
              <Image
                style={styles.potovjacket}
                source={require('../assets/image/coffe.jpg')}
              />
              <Text style={styles.textjaket}>Arabian Cofee</Text>
              <Text style={styles.textprice}>Rp. 8,499</Text>
            </View>
          </View>
          {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
          <View style={styles.viewscrollunder}>
            <View style={styles.jacket}>
              <Image
                style={styles.potovjacket}
                source={require('../assets/image/coffee0.jpg')}
              />
              <Text style={styles.textjaket}>Olive Zip-Front Jacket</Text>
              <Text style={styles.textprice}>Rs. 3,499</Text>
            </View>
            <View style={styles.jacket}>
              <Image
                style={styles.potovjacket}
                source={require('../assets/image/istockphoto.webp')}
              />
              <Text style={styles.textjaket}>Olive Zip-Front Jacket</Text>
              <Text style={styles.textprice}>Rs. 3,499</Text>
            </View>
          </View>
          {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
          <View style={styles.viewscrollunder}>
            <View style={styles.jacket}>
              <Image
                style={styles.potovjacket}
                source={require('../assets/image/aaa.png')}
              />
              <Text style={styles.textjaket}>Olive Zip-Front Jacket</Text>
              <Text style={styles.textprice}>Rs. 3,499</Text>
            </View>
            <View style={styles.jacket}>
              <Image
                style={styles.potovjacket}
                source={require('../assets/image/jacket.png')}
              />
              <Text style={styles.textjaket}>Olive Zip-Front Jacket</Text>
              <Text style={styles.textprice}>Rs. 3,499</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
        <View style={styles.bottomtabs}>
          <TouchableOpacity>
            <Image
              style={styles.homebtn}
              source={require('../assets/icon/home.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
          //  onPress={() => Navigation.navigate('Favourites')}
          >
            <Image
              style={styles.likebtn}
              source={require('../assets/icon/like.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.keranjangbtn}
              source={require('../assets/icon/keranjang.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: coklat,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    top: 10,
    // backgroundColor: red,
  },
  logomenu: {
    width: 20,
    height: 20,
    left: 15,
  },
  textheader: {
    fontSize: 20,
    fontWeight: '400',
    lineheight: 22,
    color: black,
  },
  logonotif: {
    width: 20,
    height: 20,
    right: 15,
  },
  searching: {
    top: 20,
    alignItems: 'center',
    flexDirection: 'row',

    height: 70,
    width: 366,
    left: 35,
    borderRadius: 16,
    // borderWidth: 1,
    backgroundColor: '#EDEEEF',
  },
  searchpass: {
    fontWeight: '500',
    fontSize: 17,
    marginLeft: 10,
  },
  logosearch: {
    width: 19,
    height: 19,
    marginLeft: 20,
  },
  viewman: {
    elevation: 10,
    backgroundColor: '#6C70EB',
    height: 186,
    width: 309,
    left: 25,
    top: 70,
    borderRadius: 16,
  },
  textman: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    fontSize: 26,
    color: white,
    left: 15,
    top: 10,
  },
  potoman: {
    position: 'absolute',
    left: 110,
    height: 239,
    width: 189,
    bottom: 0,
  },
  viewwoman: {
    elevation: 10,
    backgroundColor: greenyoung,

    height: 186,
    width: 309,
    left: 50,
    top: 70,
    borderRadius: 16,
  },
  textwoman: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    fontSize: 26,
    color: white,
    left: 15,
    top: 10,
  },
  potowoman: {
    position: 'absolute',
    left: 110,
    height: 239,
    width: 189,
    bottom: 0,
  },
  bungkus: {
    flexDirection: 'row',

    // backgroundColor: greenyoung,
  },
  vehicle: {
    elevation: 10,
    backgroundColor: '#6C70EB',
    height: 186,
    width: 309,
    left: 80,
    top: 70,
    borderRadius: 16,
    marginRight: 95,
    paddingRight: 70,
  },
  textvehicle: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    fontSize: 26,
    color: white,
    left: 15,
    top: 10,
  },
  potovehicle: {
    position: 'absolute',
    left: 110,
    height: 239,
    width: 189,
    bottom: 0,
  },
  textmid: {
    flexDirection: 'row',
    paddingTop: 45,
    marginTop: 10,
    // backgroundColor: black,
  },
  textrecommended: {
    position: 'absolute',
    fontWeight: '800',
    fontSize: 20,
    left: 25,
    // color: black,
  },
  textseeall: {
    position: 'absolute',
    fontWeight: 'bold',
    height: 24,
    width: 53,
    left: 350,
    fontSize: 15,
    bottom: 15,
  },
  viewscrollunder: {
    flexDirection: 'row',
    top: 7,
    paddingTop: 100,
    height: 280,
    // backgroundColor:
    //   greenyoung /*berkaitan dengan height container3 di contener3*/,
    paddingLeft: -20,
  },
  jacket: {
    left: -5,
  },
  textjaket: {
    left: 30,
    bottom: 90,
  },
  textprice: {
    left: 30,
    bottom: 85,
  },
  potovjacket: {
    elevation: 20,
    // backgroundColor: '#6C70EB',
    height: 178,
    width: 189,
    left: 25,
    bottom: 90,
    borderRadius: 16,
    marginRight: 20,
    paddingRight: 70,

    // position: 'absolute',
    // left: 110,
    // height: 239,
    // width: 189,
    // bottom: 0,
  },
  contener2: {
    height: 270,
  },
  contener3: {
    height: 280 /*berkaitan dengan viewscrollunder */,
  },
  bottomtabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    // backgroundColor: red,
    height: 55,
    paddingTop: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  homebtn: {
    // width: 40,
    // height: 40,
    height: 25,
    width: 25,
    left: 3,
    top: 4.5,
  },
  likebtn: {
    // width: 40,
    // height: 40,
    height: 25,
    width: 25,
    left: 3,
    top: 4.5,
    color: youngblue,
  },
  keranjangbtn: {
    // width: 40,
    // height: 40,
    height: 25,
    width: 25,
    left: 3,
    top: 4.5,
    // marginRight: 13,
  },
});
