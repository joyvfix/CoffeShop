import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {blue, coklat, green} from '../utils/color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';
const Login = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<Rootstakparams>>();
  return (
    <View style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <Text style={styles.title}>Login</Text>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Email</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        />
      </View>

      <View style={styles.conterInput}>
        <Text style={styles.name}>Password</Text>
        <TextInput
          placeholder="password"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        />
      </View>
      {/* <View style={styles.conterInput}>
        <Text style={styles.name}>No Hp</Text>
        <TextInput
          placeholder="masukan no hp"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        />
      </View> */}
      {/* <View style={styles.conterInput}>
        <Text style={styles.name}>Jenis Hewan</Text>
        <TextInput
          placeholder="jenis hewan"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        />
      </View> */}
      {/* <View style={styles.conterInput}>
        <Text style={styles.name}>Pilih Paket</Text>
        <TextInput
          placeholder="pilih paket"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        />
      </View> */}
      <View style={styles.buttonmid}>
        <Text style={styles.textopti}>belum punya akun?</Text>
        <TouchableOpacity onPress={() => Navigation.navigate('register')}>
          <Text style={styles.textcreateakun}>buat akun</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={() => reg()}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.textButton}>Login</Text>
        )}
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigation.replace('getstarted')}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: green,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 35,
    // backgroundColor: greenyoung,
  },
  conterInput: {
    paddingHorizontal: 20,
    marginTop: 20,
    // backgroundColor: green,
  },
  name: {
    fontSize: 16,
    color: 'black',
    // backgroundColor: red,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5,
  },

  button: {
    width: '90%',
    height: 45,
    // backgroundColor: 'blue',
    backgroundColor: coklat,
    alignSelf: 'center',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
  buttonmid: {
    flexDirection: 'row',
    top: 25,
    left: 120,
  },
  textopti: {},
  textcreateakun: {
    color: coklat,
    fontSize: 15,
    bottom: 1,
    left: 3,
  },
});
