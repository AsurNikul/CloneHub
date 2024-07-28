import {Platform, StyleSheet} from 'react-native';
import Fonts from '../../constants/fonts';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme';
import commonSty from '../../theme/commSty';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    paddingBottom: moderateScale(15),
  },
  smallContainer: {
    width: '15%',
    alignItems: 'center',
  },
  bigContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    ...commonSty.size(24),
    tintColor: colors.white,
  },
  txt: {
    fontSize: moderateScale(19),
    color: colors.white,
    fontFamily: Fonts.Bold,
  },
});

export default styles;
