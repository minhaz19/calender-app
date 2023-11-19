import {
  Animated,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {defaultStyles} from '../constants/defaultStyles';

const DropDownModal = ({
  children,
  setModalVisible,
  modalVisible,
  dropdownTop,
  dropdownStyle,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);
  return (
    <Modal
      visible={modalVisible}
      animationType="none"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback
        disabled={false}
        onPress={() => setModalVisible(false)}>
        <Animated.View style={[styles.overlay, {opacity: fadeAnim}]}>
          <View style={[dropdownStyle, {top: dropdownTop}]}>{children}</View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DropDownModal;

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    ...defaultStyles.cardShadow,
  },
});
