import {View, Switch} from 'react-native';
import React from 'react';
import {Colors} from '../../Utils/constants/Colors';

/* {
  isActive: boolean,
  onSelect: (...args: any[]) => any,
//   activeText?: string | null | undefined, [optional when needed]
//   inActiveText?: string | null | undefined, [optional when needed]
  inactiveColor?: string | undefined,
  activeColor?: string | undefined,
  inactiveTrackColor?: string | undefined,
  activeTrackColor?: string | undefined,
//   iosBgColor: string | undefined,
}*/

const SwitchView = props => {
  return (
    <View>
      <Switch
        trackColor={{
          false: props?.inactiveTrackColor
            ? props?.inactiveTrackColor
            : '#D9D9D9',
          true: props?.activeTrackColor ? props?.activeTrackColor : '#FFF2E9',
        }}
        thumbColor={
          props.isActive
            ? props?.activeColor
              ? props?.activeColor
              : Colors.Blue
            : props?.inactiveColor
            ? props?.inactiveColor
            : '#f4f3f4'
        }
        ios_backgroundColor={props?.iosBgColor ? props?.iosBgColor : '#D9D9D9'}
        onValueChange={props.onSelect}
        value={props.isActive}
      />
    </View>
  );
};

export default SwitchView;
