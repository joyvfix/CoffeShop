// import {
//     Animated,
//     FlatList,
//     StyleSheet,
//     Text,
//     View,
//     StatusBar,
//     TouchableOpacity,
//   } from 'react-native';
//   import React, {useRef, useState} from 'react';
//   import Slides from './Components/data'
//   import SlideItem from './SlideItem';
//   import Pagination from '../components/Pagination';
//   import {useNavigation} from '@react-navigation/native';
//   import {NativeStackNavigationProp} from '@react-navigation/native-stack';
//   import { Rootstakparams } from '../utils/App';

//   const Slider = () => {
//     const navigation =
//       useNavigation<NativeStackNavigationProp<Rootstakparams>>();
//     const [index, setindex] = useState(0);
//     const scrollx = useRef(new Animated.Value(0)).current;

//     const handleOnScroll = event => {
//       Animated.event(
//         [
//           {
//             nativeEvent: {
//               contentOffset: {
//                 x: scrollx,
//               },
//             },
//           },
//         ],
//         {
//           useNativeDriver: false,
//         },
//       )(event);
//     };
//     return (
//       <View>
//         <StatusBar backgroundColor={'transparent'} translucent />
//         <FlatList
//           data={Slides}
//           renderItem={({item}) => <SlideItem item={item} />}
//           horizontal
//           pagingEnabled
//           snapToAlignment="center"
//           showsHorizontalScrollIndicator={false}
//           onScroll={handleOnScroll}
//         />
//         <Pagination data={Slides} scrollx={scrollx} />
//         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//           <Text
//             style={{
//               color: '#000',
//               top: '-250%',
//               textAlign: 'center',
//               fontSize: 20,
//               fontWeight: 'bold',
//               backgroundColor: '#fff500',
//               width: '90%',
//               height: 55,
//               left: '5%',
//               paddingTop: '3%',
//               borderRadius: 50,
//             }}>
//             Daftar Sekarang
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text
//             style={{
//               color: '#fff',
//               top: '-220%',
//               textAlign: 'center',
//               fontSize: 20,
//               fontWeight: 'bold',
//               backgroundColor: '#000',
//               width: '90%',
//               height: 55,
//               left: '5%',
//               paddingTop: '3%',
//               borderRadius: 50,
//               borderWidth: 2,
//               borderColor: '#4D4D4D',
//             }}>
//             Sudah Punya Akun
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   export default Slider;

//   const styles = StyleSheet.create({});
