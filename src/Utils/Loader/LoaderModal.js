/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {useLanguage} from '../../../i18n/Translation';
import BigText from '../../CommonComponents/Text/BigText';
import {Colors} from '../constants/Colors';

const LoaderModal = ({visible}) => {
  const translations = useLanguage();
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <ActivityIndicator size={'large'} color={Colors.Primary} />
        <BigText
          text={translations.loading}
          textStyle={{color: Colors.White, paddingTop: 10}}
        />
      </View>
    </Modal>
  );
};

export default LoaderModal;
