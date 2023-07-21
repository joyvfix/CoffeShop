import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {coklat, green} from '../utils/color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';

const Register = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Rootstakparams>>();

  return (
    // <View>
    //   <Text>Register</Text>
    // </View>
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Name</Text>
        <TextInput
          placeholder="name"
          style={styles.input}
          // onChangeText={(nm: string) => setName(nm)}
        />
      </View>
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
          secureTextEntry={true}
          placeholder="password"
          style={styles.input}
          // onChangeText={(pass: string) => setPassword(pass)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Password Confirmation</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="password confirmation"
          style={styles.input}
          // onChangeText={(passConfirm: string) =>setPassword_Confirmation(passConfirm)}
        />
      </View>
      {/* <View style={styles.conterInput}>
        <Text style={styles.name}>No Telephone</Text>
        <TextInput
          secureTextEntry={false}
          placeholder="nomor telephone"
          style={styles.input}
          // onChangeText={(notelephone: string) => set_Notelephone(notelephone)}
        />
      </View> */}
      {/* <View style={styles.conterInput}>
        <Text style={styles.name}>Alamat</Text>
        <TextInput
          secureTextEntry={false}
          placeholder="alamat"
          style={styles.input}
          // onChangeText={(alm: string) => set_Alamat(alm)}
        />
      </View> */}
      <View style={styles.buttonmid}>
        <Text style={styles.textopti}>belum punya akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.textcreateakun}>sign in</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('login')}
        //  onPress={() => reg()}
      >
        {/* {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        )} */}
        <Text style={styles.textButton}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 35,
  },
  conterInput: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 16,
    color: 'black',
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
