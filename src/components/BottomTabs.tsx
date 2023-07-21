// import { StyleSheet,Text,View } from "react-native";
// import
// <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarShowLabel: false,

//         tabBarStyle: {height: 70},

//         tabBarIcon: ({focused, size, color}) => {
//           let iconName: any;
//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home';
//             color = focused ? '#6C70EB' : 'gray';
//             size = focused ? size + 12 : size + 5;
//           } else if (route.name === 'Favorites') {
//             iconName = focused ? 'heart' : 'heart';
//             color = focused ? '#6C70EB' : 'gray';
//             size = focused ? size + 12 : size + 5;
//           } else if (route.name === 'Check out') {
//             iconName = focused ? 'cart' : 'cart';
//             color = focused ? '#6C70EB' : 'gray';
//             size = focused ? size + 12 : size + 5;
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//       })}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Favorites" component={Favorites} />
//       <Tab.Screen name="Check out" component={CheckOut} />
//     </Tab.Navigator>
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomTabs = () => {
  return (
    <View>
      <Text>BottomTabs</Text>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
