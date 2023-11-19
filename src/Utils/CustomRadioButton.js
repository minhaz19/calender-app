/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../Utils/constants/Colors';
import {useLanguage} from '../../i18n/Translation';
import {useAppSelector} from '../../store/store';

const CustomRadioButton = ({optionValue, setIsImage, active = false}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = option => {
    setSelectedOption(option);
    optionValue(option);
    setIsImage([]);
  };
  const Translation = useLanguage();

  const {countableData} = useAppSelector(state => state.inventory);
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: active ? 1 : 0,
          backgroundColor: active ? Colors.White : Colors.BackgroundColor,
        },
      ]}>
      {countableData.some(item => item.quantity > 0) && (
        <Pressable
          style={[
            styles.radioButton,
            selectedOption === 'install' && styles.radioButtonSelected,
          ]}
          onPress={() => handleOptionSelect('install')}
          disabled={!active}>
          <RadioButton selected={selectedOption === 'install'} />
          <Text style={styles.radioButtonText}>{Translation.install}</Text>
        </Pressable>
      )}

      <Pressable
        style={[
          styles.radioButton,
          selectedOption === 'maintanance' && styles.radioButtonSelected,
        ]}
        onPress={() => handleOptionSelect('maintanance')}
        disabled={!active}>
        <RadioButton selected={selectedOption === 'maintanance'} />
        <Text style={styles.radioButtonText}>
          {Translation.maintenance_replace}
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.radioButton,
          selectedOption === 'no' && styles.radioButtonSelected,
        ]}
        onPress={() => handleOptionSelect('no')}
        disabled={!active}>
        <RadioButton selected={selectedOption === 'no'} />
        <Text style={styles.radioButtonText}>{Translation.no_execution}</Text>
      </Pressable>
    </View>
  );
};

const RadioButton = ({selected}) => {
  return (
    <View style={styles.radioButtonOuterCircle}>
      <View style={selected && styles.radioButtonInnerCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 10,
    gap: 10,
    borderColor: Colors.Black,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonOuterCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.Black,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
  },
  radioButtonInnerCircle: {
    height: 15,
    width: 15,
    borderRadius: 12,
    backgroundColor: Colors.Black,
  },
  radioButtonText: {
    marginLeft: 10,
    color: Colors.Black,
    fontWeight: '700',
    fontSize: 17,
  },
  radioButtonSelected: {
    borderColor: Colors.Black,
  },
});

export default CustomRadioButton;
