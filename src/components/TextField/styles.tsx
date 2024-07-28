import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Fonts from '../../constants/fonts';
import {colors} from '../../theme';
import {HEIGHT} from '../../theme/commSty';

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    borderColor: colors.black,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    height: moderateScale(45),
    fontFamily: Fonts.Regular,
  },
  titleStyle: {
    fontSize: moderateScale(16),
    marginBottom: moderateScale(13),
    marginLeft: moderateScale(5),
  },
  textInputStyle: {
    paddingLeft: 15,
    color: colors.black,
    fontSize: moderateScale(14),
    fontFamily: Fonts.Regular,
    width: '99%',
  },
  iconStyle: {
    height: 25,
    width: 25,
    marginLeft: 12,
  },
  RightIconStyle: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
});

export default styles;
