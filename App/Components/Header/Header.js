import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const imageLogo = require('../../Assets/images/first.png');

export const Header = props => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    props.setSidebarOpenOutgoingProp(sidebarOpen);
  }, [sidebarOpen]);

  useEffect(() => {
    setSidebarOpen(props.setSidebarOpenIncomingProp);
  }, [props.setSidebarOpenIncomingProp]);

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          //   disabled={sidebarOpen}
          onPress={() => {
            var s = sidebarOpen;
            // props.setSidebarOpenProp()
            setSidebarOpen(!s);
          }}>
          <Ionicons name={'ios-menu-outline'} size={35} />
        </TouchableOpacity>
        <Image source={imageLogo} style={styles.imageLogoInside} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

  imageLogoInside: {
    height: 50,
    width: 50,
  },
});
