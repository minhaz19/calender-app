/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/constants/Colors';
import {Images} from '../Utils/constants/Images';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        resizeMode="contain"
        source={Images.clan_logo}
        style={styles.clan}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>© HawkEyes Digital Monitoring Ltd.</Text>
        <Image style={styles.image} source={Images.copyright_logo} />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 5,
    paddingBottom: Platform.OS === 'ios' ? 10 : 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: Colors.Primary,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 20,
    backgroundColor: Colors.Black,
    borderRadius: 3,
  },
  text: {
    color: Colors.Black,
    fontSize: 12,
    marginRight: 2,
  },
  clan: {
    width: 40,
    height: 18,
  },
});
