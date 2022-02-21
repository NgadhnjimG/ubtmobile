import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import I18n, {changeLanguage} from '../../../assets/i18n';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
//
//sign-out

export const Sidebar = props => {
  const [open, setOpen] = useState(false);
  const fadeAnim = useRef(null);

  useEffect(() => {
    console.log(props.open);
    if (props.open) fadeIn();
    else fadeOut();
  }, [props.open]);

  const fadeIn = () => {
    fadeAnim.current.animate({0: {marginLeft: -360}, 1: {marginLeft: 0}});
    // fadeAnim.current.slideInLeft(300);
  };

  const fadeOut = async () => {
    props.close();
    fadeAnim.current.animate({0: {marginLeft: 0}, 1: {marginLeft: -360}});
  };

  const logout = () => {
    props.logout();
  };

  const sendToChat = () => {
    props.openChat();
  };

  const gotoDashboard = () => {
    props.gotoDashboard();
  };

  const goToProfile = () => {
    props.goToProfile();
  };
  return (
    <>
      <Animatable.View
        ref={fadeAnim}
        duration={300}
        // duration={200}
        style={[styles.fadingContainer]}>
        <View style={styles.Sidebar}>
          <TouchableOpacity
            // disabled={props.open}
            onPress={() => {
              // fadeOut();
            }}>
            <Ionicons name={'ios-menu-outline'} size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flex}
            // disabled={sidebarOpen}
            onPress={() => {
              gotoDashboard();
            }}>
            {/* <AntDesign name={'profile'} size={35} /> */}
            <Text style={styles.sidebarText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flex}
            // disabled={sidebarOpen}
            onPress={() => {
              goToProfile();
            }}>
            {/* <AntDesign name={'profile'} size={35} /> */}
            <Text style={styles.sidebarText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flex}
            // disabled={sidebarOpen}
            onPress={() => {
              //   fadeOut();
            }}>
            {/* <MaterialCommunityIcons
              name={'account-details-outline'}
              size={35}
            /> */}
            <Text style={styles.sidebarText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flex}
            // disabled={sidebarOpen}
            onPress={() => {
              sendToChat();
            }}>
            {/* <FontAwesomeIcon name={'wechat'} size={35} /> */}
            <Text style={styles.sidebarText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flex}
            // disabled={sidebarOpen}
            onPress={() => {
              //   fadeOut();
            }}>
            {/* <FontAwesomeIcon name={'newspaper-o'} size={35} /> */}
            <Text style={styles.sidebarText}>Something</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flex}
            // disabled={sidebarOpen}
            onPress={() => {
              logout();
            }}>
            {/* <FontAwesomeIcon name={'sign-out'} size={35} /> */}
            <Text style={styles.sidebarText}>Sign out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.closingSidebar}>
          <TouchableOpacity
            style={styles.fullView}
            onPress={fadeOut}></TouchableOpacity>
        </View>
      </Animatable.View>
    </>
  );
};

const styles = StyleSheet.create({
  sidebarText: {
    fontSize: 17,
    marginLeft: 5,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 10,
  },
  Sidebar: {
    backgroundColor: '#2286aa',
    width: '40%',
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  closingSidebar: {
    position: 'absolute',
    zIndex: 21,
    width: '60%',
    height: '100%',
    right: 0,
    // backgroundColor: 'black',
    opacity: 0.3,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    zIndex: -1,
  },
  fadingContainer: {
    position: 'absolute',
    padding: 0,
    // backgroundColor: 'powderblue',
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  fullView: {
    // zIndex: 100,
    position: 'relative',
    height: '100%',
    width: '100%',
  },
});
