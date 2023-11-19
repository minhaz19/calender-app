import {Colors} from '../constants/Colors';

// const orderMultiDates: any = [];
export const orderAndStyleRange = (range, type, color) => {
  let orderRange = [];
  let styledMarkedRange = {};
  if (type === 'RANGE') {
    const styledRange =
      range.length !== 0 &&
      range.map((_, i) => ({
        [range[i]]: {
          customStyles: {
            container: {
              backgroundColor: color !== undefined ? color : Colors.Primary,
              // backgroundColor: 'black',
              elevation: 2,
              borderRadius: 0,
              borderBottomLeftRadius: i === 0 ? 30 : 0,
              borderTopLeftRadius: i === 0 ? 30 : 0,
              borderBottomRightRadius: i === range.length - 1 ? 30 : 0,
              borderTopRightRadius: i === range.length - 1 ? 30 : 0,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
            text: {
              color: 'white',
            },
          },
        },
      }));

    styledRange &&
      styledRange?.map(
        item =>
          // @ts-ignore
          (styledMarkedRange[Object.keys(item)] = Object.values(item)[0]),
      );
  } else if (type === 'MULTI') {
    const styledRange = range?.map((_, i) => ({
      [range[i]]: {
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
    }));
    styledRange &&
      styledRange?.map(
        item => (styledMarkedRange[Object.keys(item)] = Object.values(item)[0]),
      );
  }
  return {styledMarkedRange, orderRange};
};
