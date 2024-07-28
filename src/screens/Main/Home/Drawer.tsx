import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, commonSty} from '../../../theme';
import {HEIGHT} from '../../../theme/commSty';
import {DrawerData} from '../../../constants/data';
import {Fonts, Images} from '../../../constants';
import Typography from '../../../components/Typo';

type Props = {};

const Drawer = (props: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={[[styles.subContainer]]}>
        <Typography
          title={'Setting'}
          color={colors.white}
          ml={75}
          size={26}
          mb={20}
          font={Fonts.Bold}
        />
        <FlatList
          data={DrawerData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[styles.itemContainer]}
                onPress={item.onPress}>
                <Image
                  resizeMode="contain"
                  source={item.icon}
                  style={[styles.itemImg]}
                />
                <Typography title={item.name} color={colors.white} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.primary,
    zIndex: -9999,
  },
  subContainer: {
    marginTop: HEIGHT / 4.9,
  },
  itemContainer: {
    ...commonSty.flexRow,
    ...commonSty.mt20,
    ...commonSty.ml25,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.white,
    ...commonSty.pb10,
  },
  itemImg: {
    ...commonSty.size(22),
    ...commonSty.mr15,
    tintColor: colors.white,
  },
});
