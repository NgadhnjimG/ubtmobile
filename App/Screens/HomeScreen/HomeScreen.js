import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollViewBase,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import {Users} from '../../DataSets/User';
import I18n from '../../../assets/i18n';
import {Sidebar} from '../../Components/SideBar/Sidebar';
import {Header} from '../../Components/Header/Header';
import {showMessage, hideMessage} from 'react-native-flash-message';

const imageLogo = require('../../Assets/images/first.png');

export const HomeScreen = ({navigation}) => {
  const [candidate, setCandidate] = useState(Users[0]);
  const [comment, setComment] = useState('');
  const [progress, setProgress] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    navigation.navigate('Login');
  };

  const openChat = () => {
    navigation.navigate('Chat');
  };

  const gotoDashboard = () => {
    navigation.navigate('HomeScreen');
  };

  const goToProfile = () => {
    // navigation.navigate('Profile');
  };

  const handleSendComment = () => {
    console.log(comment);
    if (comment.trim() == '') {
      showMessage({
        message: 'Ju lutem të shënoni komentin që dëshironi të dërgoni!',
        type: 'warning',
      });
      return;
    }

    navigation.navigate('Chat', {message: comment});
  };

  useEffect(() => {
    setProgress(2 / 6);
  }, [candidate]);
  return (
    <SafeAreaView style={styles.fullView}>
      <Sidebar
        open={sidebarOpen}
        logout={logout}
        openChat={openChat}
        close={() => setSidebarOpen(false)}
        gotoDashboard={gotoDashboard}
        goToProfile={goToProfile}
      />
      <Header
        setSidebarOpenOutgoingProp={setSidebarOpen}
        setSidebarOpenIncomingProp={sidebarOpen}
      />
      <ScrollView>
        <View style={styles.innerView}>
          <Text style={styles.candidateText}>
            {I18n.t('candidate')}: {candidate.name} {candidate.lastName}
          </Text>
          <Progress.Circle
            style={{marginTop: 10, marginBottom: 10}}
            size={60}
            progress={progress}
            animating={false}
            color="orange"
            borderWidth={0}
            showsText={true}
            // formatText={50}
            textStyle={{fontSize: 20}}
          />
          <Text style={styles.text}>PROCESI</Text>

          <View style={styles.procesView}>
            <LinearGradient
              colors={['#7d98bb', 'white']}
              start={{x: 0.1, y: 0.2}}
              end={{x: 0.9, y: 0.8}}
              style={styles.procesItemView}>
              <Text>SIGURIMI I DOKUMENTEVE</Text>
              <AntDesignIcon
                color={'green'}
                name={'checkcircleo'}
                size={50}
                style={{backgroundColor: 'white', borderRadius: 50}}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#7d98bb', 'white']}
              start={{x: 0.1, y: 0.2}}
              end={{x: 0.9, y: 0.8}}
              style={styles.procesItemView}>
              <Text>INTERVISTA E PUNËS</Text>
              <AntDesignIcon
                color={'green'}
                name={'checkcircleo'}
                size={50}
                style={{backgroundColor: 'white', borderRadius: 50}}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#7d98bb', 'white']}
              start={{x: 0.1, y: 0.2}}
              end={{x: 0.9, y: 0.8}}
              style={styles.procesItemView}>
              <Text>kONTRATA E PUNËS</Text>
              <AntDesignIcon
                color={'lightgray'}
                name={'checkcircleo'}
                size={50}
                style={{backgroundColor: 'white', borderRadius: 50}}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#7d98bb', 'white']}
              start={{x: 0.1, y: 0.2}}
              end={{x: 0.9, y: 0.8}}
              style={styles.procesItemView}>
              <Text>TERMINI NË AMBASADË</Text>
              <AntDesignIcon
                color={'lightgray'}
                name={'checkcircleo'}
                size={50}
                style={{backgroundColor: 'white', borderRadius: 50}}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#7d98bb', 'white']}
              start={{x: 0.1, y: 0.2}}
              end={{x: 0.9, y: 0.8}}
              style={styles.procesItemView}>
              <Text>FILLIMI I PUNËS</Text>
              <AntDesignIcon
                color={'lightgray'}
                name={'checkcircleo'}
                size={50}
                style={{backgroundColor: 'white', borderRadius: 50}}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#7d98bb', 'white']}
              start={{x: 0.1, y: 0.2}}
              end={{x: 0.9, y: 0.8}}
              style={styles.procesItemView}>
              <Text>SPECIALIZIMI</Text>
              <AntDesignIcon
                color={'lightgray'}
                name={'checkcircleo'}
                size={50}
                style={{backgroundColor: 'white', borderRadius: 50}}
              />
            </LinearGradient>
            <View style={styles.commentsBar}>
              <Text style={styles.candidateText}>
                Keni pyetjet rreth procesit tuaj?
              </Text>
              <TextInput
                value={comment}
                placeholder="Na kontakto..."
                placeholderTextColor={'#7d98bb'}
                onChangeText={text => setComment(text)}
                style={styles.commentsInput}
                multiline={true}
                numberOfLines={5}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Button
                title="Dergo"
                onPress={() => {
                  handleSendComment();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  commentsInput: {
    borderColor: '#7d98bb',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 5,
    width: '100%',
    color: 'gray',
    textAlignVertical: 'top',
    // height: 100,
  },
  commentsBar: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    height: 50,
    backgroundColor: '#7d98bb',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  fullView: {
    width: '100%',
    height: '100%',
    // padding: 25,
  },
  textView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '30%',
  },
  innerView: {
    display: 'flex',
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    height: 900,
    // k,
  },
  text: {
    color: '#7d98bb',
    fontSize: 30,
  },
  imageLogoInside: {
    height: 50,
    width: 50,
  },
  grayBackground: {
    backgroundColor: 'lightgray',
    borderBottomColor: '#7d98bb',
    borderBottomWidth: 3,
    borderStyle: 'solid',
    width: '100%',
    height: 35,
    // marginTop: 10,
  },

  candidateText: {
    color: '#7d98bb',
    fontSize: 18,
    marginVertical: 8,
  },
  procesView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 700,
  },
  procesItemView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#7d98bb',
    marginTop: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  procesItemCheckBoxView: {
    width: 50,
    height: 50,
    // backgroundColor: 'green',
  },
});
