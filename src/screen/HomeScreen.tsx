import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {black, coklat, coklat2, red, white} from '../utils/color';
import {SliderBox} from 'react-native-image-slider-box';

const HomeScreen = () => {
  const [images] = useState([
    require('../assets/image/cofeeee.jpg'),
    require('../assets/image/cofeeee.jpg'),
    require('../assets/image/cofeeee.jpg'),
    require('../assets/image/cofeeee.jpg'),
    require('../assets/image/cofeeee.jpg'),
  ]);
  const handleImagePress = (index: any) => {
    console.warn(`image ${index} pressed`);
  };

  return (
    <View style={styles.page}>
      <View style={styles.searching}>
        <Image
          style={styles.logosearch}
          source={require('../assets/icon/Vector.png')}
        />
        <TextInput
          placeholder="search coffe"
          style={styles.searchpass}></TextInput>
      </View>
      <Text style={styles.textrecomend}>Recomend Coffe</Text>
      <SliderBox
        style={styles.slide}
        autoplay={true}
        autoplayInterval={3000}
        circleloop={true}
        images={images}
        onCurrentImagePressed={handleImagePress}
        inactiveDotcolor={black}
        activeOpacity={5.5}
        dotColor={coklat}
        dotStyle={{
          width: 15,
          height: 7,
        }}
        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
        imageLoadingColor="#2196F3"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: coklat2,
  },

  firsticon: {
    width: 150,
    height: 150,
    right: 15,
    top: 10,
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
    // lineheight: 22,
    color: black,
  },
  logonotif: {
    width: 20,
    height: 20,
    right: 15,
  },
  searching: {
    top: 30,
    alignItems: 'center',
    flexDirection: 'row',
    height: 55,
    width: 370,
    left: 33,
    borderRadius: 25,
    // borderWidth: 1,
    backgroundColor: '#EDEEEF',
  },
  searchpass: {
    fontWeight: '500',
    fontSize: 17,
    marginLeft: 20,
  },
  logosearch: {
    width: 19,
    height: 19,
    marginLeft: 20,
  },
  textrecomend: {
    color: white,
    fontSize: 25,
    top: 55,
    left: 33,
  },
  slide: {
    borderRadius: 20,
    marginTop: 70,
    width: 433,
  },
});
