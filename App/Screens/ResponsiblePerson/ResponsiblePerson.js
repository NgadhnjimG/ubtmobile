import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import {Candidats} from '../../DataSets/Candidats';
import {Sidebar} from '../../Components/SideBar/Sidebar';
import {Header} from '../../Components/Header/Header';
const imageLogo = require('../../Assets/images/first.png');
const womanImage = require('../../Assets/images/woman.jpg');
const manImage = require('../../Assets/images/man.jpg');
export const ResponsiblePerson = ({navigation}) => {
  const [candidats, setCandidat] = useState(Candidats);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    navigation.navigate('Login');
  };

  const doNothing = () => {};
  const openChat = () => {
    navigation.navigate('Chat');
  };

  const gotoDashboard = () => {
    navigation.navigate('HomeScreen');
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const gotoChat = () => {
    navigation.navigate('Chat');
  };
  return (
    <View style={styles.fullView}>
      <Sidebar
        open={sidebarOpen}
        logout={logout}
        openChat={doNothing}
        close={() => setSidebarOpen(false)}
        gotoDashboard={gotoDashboard}
        goToProfile={goToProfile}
      />
      <Header
        setSidebarOpenOutgoingProp={setSidebarOpen}
        setSidebarOpenIncomingProp={sidebarOpen}
      />
      <ScrollView
        style={{
          paddingHorizontal: 10,
          marginTop: 10,
          backgroundColor: 'white',
        }}>
        {candidats.map((candidate, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={
                candidate.unreadMessages
                  ? styles.candidatBoxUnreadMessages
                  : styles.candidatBox
              }
              onPress={() => {
                gotoChat();
              }}>
              <View style={styles.imageContainer}>
                <Image
                  source={candidate.gender == 'F' ? womanImage : manImage}
                  style={styles.candidateImage}
                />
              </View>
              <View style={styles.userTextualDetailsBox}>
                <Text
                  style={
                    styles.candidatName
                  }>{`${candidate.name} ${candidate.lastName}`}</Text>
                <Text
                  style={styles.candidatDetails}>{`${candidate.details}`}</Text>
              </View>
              {candidate.unreadMessages == true ? (
                <View style={styles.dotViewContainer}>
                  <View style={styles.dotView}></View>
                </View>
              ) : (
                <></>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dotViewContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: '100%',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  dotView: {
    backgroundColor: '#7d98bb',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  candidatDetails: {
    color: '#7d98bb',
    fontSize: 14,
  },
  candidatName: {
    color: '#7d98bb',
    fontSize: 16,
  },
  userTextualDetailsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  candidatBoxUnreadMessages: {
    width: '100%',
    backgroundColor: '#f2f6fa',
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  candidatBox: {
    width: '100%',
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  candidateImage: {
    height: '100%',
    width: '100%',
  },
  candidatBoxNewMessage: {
    backgroundColor: 'lightgray',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: 5,
    marginRight: 15,
  },
  headerText: {
    fontSize: 18,
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
  innerView: {
    display: 'flex',
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    height: Dimensions.get('window').height,
    // k,
  },
  imageLogoInside: {
    height: 50,
    width: 50,
  },
});
