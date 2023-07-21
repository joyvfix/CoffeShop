// import {StyleSheet, Animated, Dimensions, View} from 'react-native';
// import React from 'react';
// // import index from './Router';

// const {width} = Dimensions.get('screen');

// const Pagination = ({data, scrollx}) => {
//   return (
//     <View style={styles.container}>
//       {data.map((_, idx) => {
//         const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

//         const dotwidth = scrollx.interpolate({
//           inputRange,
//           outputRange: [130, 130, 130],
//           extrapolate: 'clamp',
//         });
//         const backgroundColor = scrollx.interpolate({
//           inputRange,
//           outputRange: ['#666666', '#FFF500', '#666666'],
//           extrapolate: 'clamp',
//         });
//         return (
//           <Animated.View
//             key={idx.toString()}
//             style={[styles.dot, {width: dotwidth, backgroundColor}]}
//           />
//         );
//       })}
//     </View>
//   );
// };

// export default Pagination;
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 20,
//     flexDirection: 'row',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   dot: {
//     width: 130,
//     height: 8,
//     borderRadius: 5,
//     backgroundColor: '#666666',
//     marginHorizontal: 3,
//   },
//   dotActive: {
//     backgroundColor: '#FFF500',
//   },
// });
