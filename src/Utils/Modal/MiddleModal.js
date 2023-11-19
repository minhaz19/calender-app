/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Utils/constants/Colors';
import Text_Size from '../../Utils/constants/textScaling';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/windowSize';
import IOSButton from '../../Button/IOSButton';
import BigText from '../../CommonComponents/Text/BigText';
import {Images} from '../../Utils/constants/Images';

/*
  onBlur: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
  setIsModalVisible: (arg0: boolean) => void;
  isModalVisible: boolean | undefined;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  isButton?: boolean;
  notOutsidePress?: boolean;
  height?: string;
  handlePress: () => void;
  btnOneText?: string;     [if isButton is true then this field is compulsory]
  btnTwoText?: string;    [if isButton is true then this field is compulsory]
  btnOneColor?: string;   [if isButton is true then this field is compulsory]
  btnTwoColor?: string;   [if isButton is true then this field is compulsory]
*/
const MiddleModal = props => {
  return (
    <TouchableWithoutFeedback
      onBlur={props.onBlur}
      onPress={() => props?.setIsModalVisible(false)}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props?.isModalVisible}>
        <TouchableWithoutFeedback
          disabled={props.notOutsidePress ? true : false}
          onPress={() =>
            props?.setIsModalVisible && props?.setIsModalVisible(false)
          }>
          <View style={[styles.centeredView]}>
            <View
              style={[
                styles.modalView,
                {
                  backgroundColor: Colors.BackgroundColor,
                  minHeight: props.height ? props.height : '20%',
                  maxHeight: '20%',
                },
              ]}>
              {props.isHeader && (
                <View
                  style={{
                    backgroundColor: Colors.Primary,
                    width: '100%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                  <BigText
                    text={props.header}
                    textStyle={{color: Colors.White}}
                  />
                </View>
              )}
              {props.isCross && (
                <Pressable
                  onPress={() => {
                    props?.setIsModalVisible(false);
                  }}
                  style={({pressed}) => [
                    {
                      position: 'absolute',
                      top: 5,
                      right: 5,
                      opacity: pressed ? 0.7 : 1,
                      zIndex: 1,
                      backgroundColor: Colors.Black,
                      padding: 5,
                      borderRadius: 50,
                    },
                  ]}>
                  <Image
                    source={Images.Cross}
                    style={{width: 12, height: 12, tintColor: Colors.White}}
                  />
                </Pressable>
              )}
              <View>{props.children}</View>

              {/*Bottom Buttons */}
              {props.isButton && (
                <View style={{width: '100%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <IOSButton
                      containerStyle={styles.containerStyle}
                      onSelect={() => {
                        props?.setIsModalVisible(false);
                        props.handleBtnOnePress && props.handleBtnOnePress();
                      }}
                      disabled={props?.loading ? props?.loading : false}
                      loading={props?.loading}
                      btnStyle={{
                        backgroundColor: props?.loading
                          ? Colors.Grey
                          : props.btnOneColor,
                      }}
                      textAlignment={styles.textAlignment}
                      titleStyle={styles.textStyle}
                      title={props.btnOneText}
                    />
                    <IOSButton
                      containerStyle={styles.containerStyle}
                      onSelect={() => {
                        props?.setIsModalVisible(false);
                        props.handleBtnTwoPress && props.handleBtnTwoPress();
                      }}
                      textAlignment={styles.textAlignment}
                      btnStyle={{backgroundColor: props.btnTwoColor}}
                      titleStyle={styles.textStyle}
                      title={props.btnTwoText}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalText: {
    color: 'black',
    fontSize: Text_Size.Text_1,
  },
  modalView: {
    width: SCREEN_WIDTH > 800 ? '60%' : '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 9,
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  containerStyle: {
    height: SCREEN_HEIGHT <= 800 ? SCREEN_HEIGHT * 0.04 : 30,
    width: '25%',
    borderRadius: 10,
    marginBottom: '10%',
    marginTop: '5%',
  },
  textAlignment: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: Text_Size.Text_10,
    fontWeight: '600',
    color: Colors.White,
  },
});

export default MiddleModal;
