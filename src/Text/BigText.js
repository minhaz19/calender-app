import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/constants/Colors';
import Text_Size from '../Utils/constants/textScaling';

const BigText = props => {
  return (
    <View>
      <Text
        allowFontScaling={false}
        style={[styles.title, {color: Colors.Black}, {...props.textStyle}]}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: Text_Size.Text_2,
    fontWeight: '600',
  },
});

export default BigText;
