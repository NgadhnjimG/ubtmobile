import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {Header} from '../../Components/Header/Header';
import {Sidebar} from '../../Components/SideBar/Sidebar';
import {GiftedChat} from 'react-native-gifted-chat';

export const Chat = ({navigation}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Test',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const logout = () => {
    navigation.navigate('Login');
  };

  const openChat = () => {
    navigation.navigate('Chat');
  };
  const gotoDashboard = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <>
      <SafeAreaView style={styles.fullView}>
        <Sidebar
          open={sidebarOpen}
          logout={logout}
          openChat={openChat}
          close={() => setSidebarOpen(false)}
          gotoDashboard={gotoDashboard}
        />
        <Header
          setSidebarOpenOutgoingProp={setSidebarOpen}
          setSidebarOpenIncomingProp={sidebarOpen}
        />
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
            name: 'test',
          }}
          renderUsernameOnMessage={true}
          //isTyping={true}
          alwaysShowSend={true}
          textInputStyle={{color: 'black'}}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  fullView: {
    width: '100%',
    height: '100%',
    // padding: 25,
  },

  text: {
    color: 'black',
  },
});
