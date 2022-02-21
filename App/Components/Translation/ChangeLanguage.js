import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import I18n, {changeLanguage} from '../../../assets/i18n';
import {SelectCountry} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ChangeLanguage = props => {
  const [country, setCountry] = useState('1');

  useEffect(() => {
    console.log(country);
    // changeLanguage(country);
    props.switch(country);
  }, [country]);

  const local_data = [
    {
      lable: 'English',
      value: 'en',
    },
    {
      lable: 'German',
      value: 'de',
    },
    {
      lable: 'Albanian',
      value: 'al',
    },
  ];
  return (
    <>
      <Text style={styles.changeLanguage}>{I18n.t('changeLanguage')}</Text>
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={{width: 100, left: 0, position: 'relative'}}
        maxHeight={120}
        value={country}
        data={local_data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="English"
        onChange={e => {
          setCountry(e.value);
        }}
        imageStyle={styles.imageStyle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    width: 100,
    // height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    color: 'black',
    padding: 0,
  },
  imageStyle: {
    width: 0,
    height: 0,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#7d98bb',
  },
  selectedTextStyle: {
    fontSize: 16,
    // marginLeft: 8,
    color: '#7d98bb',
    // padding: 0,
    // marginLeft: 0,
    marginVertical: 2,
    position: 'relative',
    left: 0,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  changeLanguage: {
    color: '#7d98bb',
    fontSize: 15,
  },
  imageLogo: {
    height: 30,
    width: 30,
  },
});
