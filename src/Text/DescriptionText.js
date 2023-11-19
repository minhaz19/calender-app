import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/constants/Colors';
import Text_Size from '../Utils/constants/textScaling';

const DescriptionText = props => {
  return (
    <View>
      <Text
        allowFontScaling={false}
        ellipsizeMode={props.ellipsizeMode}
        numberOfLines={props.numberOfLines}
        style={[styles.details, {color: Colors.Black}, {...props.textStyle}]}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    fontSize: Text_Size.Text_9,
  },
});

export default DescriptionText;
