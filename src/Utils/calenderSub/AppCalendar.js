import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {CalendarList} from 'react-native-calendars';
import {useHandleRange} from './useHandleRange';
import {Colors} from '../constants/Colors';
import TitleText from '../../Text/TitleText';

const AppCalendar = ({
  range = 6,
  selectType,
  handlePress,
  handleConfirm,
  selectedDate,
  minDate,
}) => {
  const {handleDayPress, singleSelect, _markedStyle} = useHandleRange(
    selectType,
    handleConfirm,
    selectedDate,
  );

  return (
    <View style={styles.contentContainer}>
      <CalendarList
        current={new Date().toString()}
        minDate={minDate}
        pastScrollRange={range}
        futureScrollRange={range}
        onDayPress={data => {
          console.log('data level');
          handleDayPress(data);
          handlePress && handlePress(data);
        }}
        markingType={'custom'}
        markedDates={{
          ..._markedStyle,
          [singleSelect]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Primary,
                elevation: 2,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              },
              text: {
                color: 'white',
              },
            },
          },
        }}
        renderHeader={renderCustomHeader}
        theme={calendarTheme}
      />
    </View>
  );
};

const renderCustomHeader = date => {
  const header = date.toString('MMMM yyyy');
  const [month, year] = header.split(' ');
  const textStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: Colors.Primary,
    paddingRight: 5,
  };

  return (
    <View style={styles.header}>
      <TitleText
        text={`${month}`}
        textStyle={{...styles.month, ...textStyle}}
      />
      <TitleText text={year} textStyle={{...styles.year, ...textStyle}} />
    </View>
  );
};

const calendarTheme = {
  stylesheet: {
    calendar: {
      header: {
        dayHeader: {
          fontWeight: 'bold',
          color: Colors.Primary,
        },
      },
    },
  },
  'stylesheet.day.basic': {
    today: {
      borderColor: Colors.Grey,
      borderWidth: 0.8,
    },
    todayText: {
      color: Colors.Primary,
      fontWeight: '800',
    },
  },
  backgroundColor: Colors.White,
  calendarBackground: Colors.White,
  selectedDayBackgroundColor: Colors.Primary,
  selectedDayTextColor: Colors.Black,
  todayTextColor: Colors.Primary,
  dayTextColor: Colors.Black,
  textDisabledColor: Colors.gray,
  arrowColor: Colors.Black,
  disabledArrowColor: Colors.subText,
  monthTextColor: Colors.Black,
  indicatorColor: Colors.Black,
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: 14,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 14,
};

export default memo(AppCalendar);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  reset: {position: 'absolute', top: '1%', zIndex: 999, left: '43%'},
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  month: {
    marginLeft: 5,
  },
  year: {
    marginRight: 5,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: Colors.Primary,
    paddingRight: 5,
  },
});
