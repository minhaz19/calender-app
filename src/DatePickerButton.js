/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppCalendar from './Utils/calenderSub/AppCalendar';

const DatePickerButton = ({
  selectedDate,
  isDatePickerVisible,
  handleConfirm,
  setDatePickerVisibility,
  minDate,
  dateFormat,
}) => {
  const dateString = new Date();
  const parsedCurrentDate = dateString.toISOString().substring(0, 10);
  return (
    <View>
      <TouchableOpacity
        style={[styles.sectionContainer, {backgroundColor: 'white'}]}
        onPress={() => setDatePickerVisibility(!isDatePickerVisible)}>
        <View style={styles.textWidth}>
          <Text style={styles.titleText}>
            {dateFormat === 'SINGLE' ? 'single' : 'date range'}
          </Text>
          {dateFormat === 'SINGLE' ? (
            <Text>{selectedDate ? `${selectedDate}` : 'date range tap'}</Text>
          ) : (
            <Text
              text={
                selectedDate?.startDate && selectedDate.endDate
                  ? `Form: ${selectedDate?.startDate} To: ${selectedDate.endDate}`
                  : 'date range tap'
              }
            />
          )}
        </View>
        <View style={styles.iconContainer}>
          {/* <Image source={Images.Calender} style={{ width: 30, height: 30 }} /> */}
        </View>
      </TouchableOpacity>
      {isDatePickerVisible ? (
        <Modal
          animated
          transparent
          visible={isDatePickerVisible}
          animationType="fade">
          <Pressable
            style={styles.bgContainer}
            onPress={() => setDatePickerVisibility(!isDatePickerVisible)}
          />
          <View
            style={[
              styles.pickerContainer,
              {
                backgroundColor: 'white',
              },
            ]}>
            <View style={styles.calHeader}>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                {'Select date'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setDatePickerVisibility(false);
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    // fontSize: '16',
                    // color: Colors.headerText,
                  }}>
                  {'Done'}
                </Text>
              </TouchableOpacity>
            </View>
            <AppCalendar
              selectType={dateFormat}
              handleConfirm={handleConfirm}
              selectedDate={selectedDate}
              minDate={minDate}
            />
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

export default DatePickerButton;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    // fontSize: Text_Size.Text_1,
    marginBottom: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  Text: {
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 10,
    borderWidth: 1,
    // borderColor: Colors.BackgroundColor,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  slotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slot: {
    // width: (SCREEN_WIDTH - 50) / 2,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: Colors.border,
    borderRadius: 10,
  },
  container: {
    paddingVertical: 20,
  },
  pickerContainer: {
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
  },
  bgContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  calHeader: {
    marginVertical: 20,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    // fontSize: Text_Size.Text_3,
  },
  calDone: {
    fontWeight: 'bold',
    // fontSize: Text_Size.Text_2,
  },
  done: {fontWeight: 'bold'},
  textWidth: {width: '85%'},
});
