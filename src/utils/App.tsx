// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

import {Text, StyleSheet, View, DrawerLayoutAndroid} from 'react-native';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screen/Register';
import HomeScreen from '../screen/HomeScreen';
import Splash from '../screen/Splash';
import Login from '../screen/Login';
import GetStarted from '../screen/GetStarted';
import HomeScreen2 from '../screen/HomeScreen2';

const Stack = createNativeStackNavigator<Rootstakparams>();

export type Rootstakparams = {
  // firstpage: undefined;
  // loginscreen: undefined;
  // listscreen: undefined;
  // drawer: undefined;
  login: undefined;
  register: undefined;
  splash: undefined;
  homescreen: undefined;
  getstarted: undefined;
  homescreen2: undefined;
  // detailproduct: {no_id: number};
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="homescreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="getstarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="homescreen2"
          component={HomeScreen2}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="opencamera"
          component={OpenCamera}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="drawerexample"
          component={DrawerExample}
          options={{headerShown: true}}
        /> */}
        {/* <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: true}}
        /> */}
        {/* <Stack.Screen
          name="homescreen"
          component={HomeScreen}
          options={{headerShown: true}}
        /> */}
        {/* <Stack.Screen
          name="detailproduct"
          component={DetailProduct}
          options={{headerShown: true}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}

// import {Text, StyleSheet, View, DrawerLayoutAndroid} from 'react-native';
// import React, {Component} from 'react';
// import FirstPage from '../screen/FirstPage';
// import DrawerExample from '../screen/DrawerExample';
// import Register from '../screen/Register';
// import LoginRegister from '../screen/LoginRegister';

// export default class App extends Component {
//   render() {
//     return <LoginRegister />;
//   }
// }
