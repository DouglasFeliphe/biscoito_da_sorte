import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import instaLogoImg from '../../assets/logo.png';
import instaSendImg from '../../assets/send.png';
import {feed_list} from './feed';
import List from './List';

const Instagram = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={instaLogoImg} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={instaSendImg} style={styles.send} />
        </TouchableOpacity>
      </View>
      <List data={feed_list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,

    borderBottomWidth: 0.5,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {},
  send: {
    height: 23,
    width: 23,
  },
});

export default Instagram;
