// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';

// const {width, height} = Dimensions.get('screen');

// const SlideItem = ({item}) => {
//   return (
//     <View style={styles.container}>
//       <Image source={item.img} style={styles.img} />
//       <Image source={item.image} style={styles.image} />
//       <Image source={item.images} style={styles.images} />
//       <View style={styles.contentview}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.Title}>{item.Title}</Text>
//         <Text style={styles.titlle}>{item.titlle}</Text>
//       </View>
//       <View style={styles.contenview}>
//         <Text style={styles.titel}>{item.titlex}</Text>
//         <Text style={styles.titll}>{item.titlles}</Text>
//       </View>
//       <View style={styles.subtitlle}>
//         <Text style={styles.subtitle}>{item.subtitle}</Text>
//       </View>
//     </View>
//   );
// };

// export default SlideItem;

// const styles = StyleSheet.create({
//   container: {
//     width,
//     height,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//   },
//   img: {
//     width: '150%',
//     height: 700,
//     left: '-15%',
//     top: '7%',
//   },
//   image: {
//     position: 'absolute',
//     width: '140%',
//     height: 700,
//     left: '-11%',
//     top: '-9%',
//   },
//   images: {
//     position: 'absolute',
//     width: '60%',
//     height: 200,
//     left: '11%',
//     top: '20%',
//   },
//   contentview: {
//     flexDirection: 'row',
//     gap: 10,
//     top: '-55%',
//     left: '-3%',
//   },
//   Title: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     color: '#fff',
//     left: '55%',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   titlle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#FFF500',
//   },
//   contenview: {
//     flexDirection: 'row',
//     gap: 10,
//     top: '-65%',
//     left: '-5.8%',
//   },
//   titel: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#fff',
//     left: '10%',
//   },
//   titll: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#FFF500',
//   },

//   subtitle: {
//     fontSize: 20,
//     color: '#fff',
//   },
//   subtitlle: {
//     left: '-2.5%',
//     top: '-32%',
//     height: 80,
//     width: '85%',
//   },
// });
