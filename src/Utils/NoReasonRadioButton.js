import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../Utils/constants/Colors';
import BigText from '../CommonComponents/Text/BigText';
import {useLanguage} from '../../i18n/Translation';

const NoReasonRadioButton = ({optionValue}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = option => {
    setSelectedOption(option);
    optionValue(option);
  };
  const Translation = useLanguage();
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.radioButton,
          selectedOption === 'Shop Closed' && styles.radioButtonSelected,
        ]}
        onPress={() => handleOptionSelect('Shop Closed')}>
        <RadioButton selected={selectedOption === 'Shop Closed'} />
        <BigText
          textStyle={styles.radioButtonText}
          text={Translation.shop_closed}
        />
      </Pressable>

      <Pressable
        style={[
          styles.radioButton,
          selectedOption === 'Permanently Closed' && styles.radioButtonSelected,
        ]}
        onPress={() => handleOptionSelect('Permanently Closed')}>
        <RadioButton selected={selectedOption === 'Permanently Closed'} />
        <BigText
          textStyle={styles.radioButtonText}
          text={Translation.permanently_closed}
        />
      </Pressable>

      <Pressable
        style={[
          styles.radioButton,
          selectedOption === 'No need for execution' &&
            styles.radioButtonSelected,
        ]}
        onPress={() => handleOptionSelect('No need for execution')}>
        <RadioButton selected={selectedOption === 'No need for execution'} />
        <BigText
          textStyle={styles.radioButtonText}
          text={Translation.no_need_for_execution}
        />
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          selectedOption === 'Permission Denied' && styles.radioButtonSelected,
        ]}
        onPress={() => handleOptionSelect('Permission Denied')}>
        <RadioButton selected={selectedOption === 'Permission Denied'} />
        <BigText
          textStyle={styles.radioButtonText}
          text={Translation.permission_denied}
        />
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#f8f8f8',
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
    marginLeft: 15,
    color: Colors.Black,
  },
  radioButtonSelected: {
    borderColor: Colors.Black,
  },
});

export default NoReasonRadioButton;
