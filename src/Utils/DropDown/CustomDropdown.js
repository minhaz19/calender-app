import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../Utils/constants/Colors';
import {defaultStyles} from '../../Utils/constants/defaultStyles';
import {Images} from '../../Utils/constants/Images';
import TitleText from '../../CommonComponents/Text/TitleText';

const CustomDropdown = ({
  title,
  dropdownItems,
  selectedItem,
  setSelectedItem,
  inventoryData,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownSelect = item => {
    setSelectedItem(item);
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.dropdownButton}
        onPress={() => setDropdownVisible(!dropdownVisible)}>
        <TitleText
          text={selectedItem.name ? selectedItem.name : title}
          textStyle={{color: Colors.Grey}}
        />
        <Image source={Images.DownArrow} style={styles.dropdownIcon} />
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdown}>
          {dropdownItems.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={index}
              style={styles.dropdownItem}
              onPress={() => handleDropdownSelect(item)}>
              <TitleText text={item?.name} textStyle={styles.itemText} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
  },
  dropdownButton: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    ...defaultStyles.cardShadow,
  },

  dropdownIcon: {
    width: 12,
    height: 12,
    tintColor: Colors.Grey,
    marginTop: 2,
    marginLeft: 5,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 4,
    justifyContent: 'center',
    ...defaultStyles.cardShadow,
  },
  dropdownItem: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  itemText: {
    color: '#6B6868',
    textAlign: 'left',
  },
});

export default CustomDropdown;
