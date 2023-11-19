/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {compareDate} from './compareDate';
import {_dateRange} from './datesArray';
import {orderAndStyleRange} from './orderAndStyleRange';

export const useHandleRange = (type, handleConfirm, selectedDate) => {
  const [_markedStyle, setMarkedStyle] = useState({});
  const [step, setSteps] = useState(1);
  const [dateRange, setDateRange] = useState([]);
  const [prevDate, setPrevDate] = useState();
  const [singleSelect, setSingleSelect] = useState();
  const [startingDate, setStartingDate] = useState(selectedDate?.startDate);
  const [endingDate, setEndingDate] = useState(selectedDate?.endDate);

  const handleDayPress = date => {
    console.log('-------');
    if (type === 'SINGLE') {
      setSingleSelect(date.dateString);
      handleConfirm(date.dateString);
    } else if (type === 'RANGE') {
      const {end} = compareDate(date.dateString, step, setPrevDate);
      if (step === 1) {
        setSteps(2);
        setStartingDate(date.dateString);
        setSingleSelect(date.dateString);
      } else if (prevDate !== undefined) {
        if (step === 2 && prevDate < end) {
          setEndingDate(date.dateString);
          setSingleSelect('');
          setSteps(2);
          if (
            startingDate === date.dateString ||
            endingDate === date.dateString
          ) {
            setSteps(1);
            setStartingDate('');
            setEndingDate('');
          }
        } else if (step === 2 && prevDate > end) {
          setEndingDate('');
          setStartingDate(date.dateString);
          setSingleSelect(date.dateString);
          compareDate(date.dateString, 1, setPrevDate);
        }
      }
      console.log('======');
    }
  };
  useEffect(() => {
    if (type === 'RANGE') {
      const range = _dateRange(startingDate, endingDate);
      const {styledMarkedRange, orderRange} = orderAndStyleRange(
        range,
        'RANGE',
      );
      setMarkedStyle(styledMarkedRange);
      range && setDateRange(orderRange);
      handleConfirm(startingDate, endingDate);
    }
  }, [endingDate, startingDate, type]);

  const reset = () => {
    setStartingDate('');
    setEndingDate('');
    setDateRange([]);
    setSingleSelect('');
    setMarkedStyle({});
    setSteps(1);
  };
  const resetSelection = () => {
    setStartingDate('');
    setEndingDate('');
    setSingleSelect('');
    setMarkedStyle({});
    setSteps(1);
  };
  return {
    handleDayPress,
    _markedStyle,
    singleSelect,
    startingDate,
    endingDate,
    dateRange,
    reset,
    resetSelection,
    setMarkedStyle,
  };
};
