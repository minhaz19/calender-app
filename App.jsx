import React, {useState} from 'react';
import DatePickerButton from './src/DatePickerButton';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import HeaderText from './src/Text/HeaderText';
import TitleText from './src/Text/TitleText';
import {Colors} from './src/Utils/constants/Colors';

const App = () => {
  // const [selectedRange, setSelectedRange] = useState({
  //   startDate: null,
  //   endDate: null,
  // });
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const handleConfirm = (startDate, endDate) => {
  //   setSelectedRange({
  //     startDate: startDate,
  //     endDate: endDate ? endDate : startDate,
  //   });
  // };
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';
  console.log(startDate);
  console.log(endDate);

  const customDatesStylesCallback = date => {
    switch (date.isoWeekday()) {
      case 5: // friday
        return {
          textStyle: {
            color: 'red',
          },
        };
    }
  };
  const disabledDates = date => {
    switch (date.isoWeekday()) {
      case 5:
        return [date];
    }
  };

  return (
    // <View style={{ flex: 1 }}>
    //   <DatePickerButton
    //     dateFormat={'RANGE'}
    //     selectedDate={selectedRange}
    //     isDatePickerVisible={isDatePickerVisible}
    //     handleConfirm={handleConfirm}
    //     setDatePickerVisibility={setDatePickerVisibility}
    //     minDate={'2023-07-05'}
    //   />
    // </View>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => setIsModalVisible(!isModalVisible)}>
        <HeaderText textStyle={styles.innerText} text="Add Photo" />
      </TouchableOpacity>
      {/* <TouchableWithoutFeedback
        // onBlur={onBlur}
        onPress={() => setIsModalVisible(false)}> */}
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        {/* <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}> */}
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {width: windowWidth - 40, height: windowHeight / 2},
            ]}>
            {/* <View style={styles.container}> */}
            <View>
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                // minDate={new Date()}
                // maxDate={maxDate}
                todayBackgroundColor="#f2e6"
                selectedDayColor="#7300e6"
                selectedDayTextColor="#FFFFFF"
                onDateChange={onDateChange}
                width={windowWidth - 50}
                disabledDates={disabledDates}
                // disabledDatesTextStyle={Colors.Red}
                // customDayHeaderStyles={customDayHeaderStylesCallback}
                customDatesStyles={customDatesStylesCallback}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: 10,
              }}>
              <View>
                <TouchableOpacity
                  style={[styles.button, styles.pickerButton]}
                  onPress={() => setIsModalVisible(false)}>
                  <TitleText
                    text={'Cancel'}
                    textStyle={{...styles.buttonText, color: Colors.White}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    styles.button,
                    styles.pickerButton,
                    {backgroundColor: Colors.Primary},
                  ]}
                  onPress={() => setIsModalVisible(false)}>
                  <TitleText
                    text={'Confirm'}
                    textStyle={{...styles.buttonText, color: Colors.White}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* </View> */}
        </View>
        {/* </TouchableWithoutFeedback> */}
      </Modal>
      <View>
        <Text>SELECTED START DATE: {startDate}</Text>
        <Text>SELECTED END DATE: {endDate}</Text>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: 'gray',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  modalView: {
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
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.White,
    fontWeight: 500,
    fontSize: 16,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Colors.Grey,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
});
