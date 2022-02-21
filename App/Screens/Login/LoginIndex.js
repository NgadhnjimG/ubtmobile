import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Users} from '../../DataSets/User';
import {showMessage, hideMessage} from 'react-native-flash-message';

import I18n, {changeLanguage} from '../../../assets/i18n.js';
import {ChangeLanguage} from '../../Components/Translation/ChangeLanguage';
import { loginRest, loginXML } from '../../Services/UserService';
const imageLogo = require('../../Assets/images/first.png');

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('ng');
  const [password, setPassword] = useState('123456');
  const [users, setUser] = useState(Users);

  const doLogin = () => {
    if (email == '' || password == '') {
      showMessage({
        message: 'Ju lutem te mbushni te dhenat!',
        type: 'warning',
      });
    }
    
    loginRest({email, password}).then(res=>{
      navigation.navigate("HomeScreen")
    });
    loginXML({email, password});
    
    showMessage({
      message: 'Kredencialet e gabuara!',
      type: 'danger',
    });
    return false;
  };

  const changeLang = langKey => {
    console.log('test', langKey);
    I18n.locale = langKey;
  };
  return (
    <SafeAreaView style={styles.fullView}>
      <View style={styles.innerView}>
        <Image source={imageLogo} style={styles.imageLogo} />
        <View style={styles.textView}>
          <Text style={styles.text}>{I18n.t('greeting')}</Text>
          {/* {/* <Text style={styles.text}>WILLKOMEN!</Text> */}
          <ChangeLanguage switch={changeLang} />
        </View>
        <TextInput
          style={styles.grayBackground}
          value={email}
          placeholder="Email i SHFRYTEZUESIT"
          placeholderTextColor="#7d98bb"
          onChangeText={setEmail}
        />
        {/* div */}
        <View style={{width: '100%'}}>
          {/* input */}
          <TextInput
            style={styles.grayBackground}
            secureTextEntry={true}
            value={password}
            placeholder="FJALËKALIMI"
            placeholderTextColor="#7d98bb"
            onChangeText={setPassword}
          />
          {/* buton */}
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.text, {fontSize: 13}]}>
              Keni harruar fjalëkalimin?
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Hyrje"
          onPress={() => {
            doLogin();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //

  fullView: {
    width: '100%',
    height: '100%',
    padding: 25,
  },
  textView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '30%',
  },
  innerView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  text: {
    color: '#7d98bb',
    fontSize: 30,
  },
  imageLogo: {
    height: 100,
    width: 100,
  },
  grayBackground: {
    backgroundColor: 'lightgray',
    borderBottomColor: '#7d98bb',
    borderBottomWidth: 3,
    borderStyle: 'solid',
    width: '100%',
    height: 35,
    color: 'black',
    // marginTop: 10,
  },
});
