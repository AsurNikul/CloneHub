import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {forwardRef, PropsWithChildren, Ref, useState} from 'react';
import Sheet from '../Sheet';
import {colors, commonSty} from '../../theme';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {moderateScale} from 'react-native-size-matters';
import {appsData} from '../../constants/data';
import {WIDTH} from '../../theme/commSty';
import Typography from '../Typo';
import {Fonts} from '../../constants';
import PrimaryBtn from '../button';

type Props = {
  containerSty?: ViewStyle;
};

// Using `Ref<ActionSheetRef>` to handle `null` or `undefined` values
const AppsSheet = forwardRef<ActionSheetRef, PropsWithChildren<Props>>(
  ({containerSty}, ref: Ref<ActionSheetRef>) => {
    const [selected, setSelected] = useState<any>([]);
    const handleCancel = () => {
      if (ref) {
        ref.current.hide();
      }
    };
    const handleAddItem = (item: any) => {
      if (selected.includes(item)) {
        setSelected(selected.filter((i: any) => i.id !== item.id));
      } else {
        setSelected([...selected, item]);
      }
    };
    return (
      <Sheet ref={ref}>
        <View style={[styles.mainContainer, containerSty]}>
          <FlatList
            data={appsData}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            renderItem={({item}) => {
              let isSelectedItem = selected.includes(item);
              return (
                <TouchableOpacity
                  onPress={() => handleAddItem(item)}
                  style={[
                    {
                      backgroundColor: isSelectedItem
                        ? colors.primaryOpacity
                        : colors.whiteLight,
                      borderColor: isSelectedItem
                        ? colors.primary
                        : colors.greyDark,
                    },
                    styles.itemContainer,
                  ]}
                  activeOpacity={0.6}>
                  <Image
                    resizeMode="contain"
                    source={item.img}
                    style={[commonSty.size(55)]}
                  />
                  <Typography
                    title={item.title}
                    mt={5}
                    size={16}
                    font={isSelectedItem ? Fonts.Bold : Fonts.Regular}
                    color={isSelectedItem ? colors.white : colors.greyDark}
                  />
                </TouchableOpacity>
              );
            }}
          />
          <View style={[commonSty.rowSpaceBetween, commonSty.pl5]}>
            <PrimaryBtn
              title="Cancel"
              btnStyle={styles.cancelBtnSty}
              btnTextStyle={styles.primaryClr}
              onPress={handleCancel}
            />
            <PrimaryBtn
              title="Confirm"
              btnStyle={styles.confirmBtnSty}
              onPress={handleCancel}
            />
          </View>
        </View>
      </Sheet>
    );
  },
);

export default AppsSheet;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.whiteLight,
    width: '91%',
    borderRadius: moderateScale(20),
    maxHeight: '100%',
    ...commonSty.selfCenter,
    ...commonSty.pv15,
    ...commonSty.pr15,
    ...commonSty.pl10,
  },
  itemContainer: {
    width: WIDTH / 4.3,
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    borderWidth: StyleSheet.hairlineWidth,
    ...commonSty.center,
    ...commonSty.m10,
  },
  cancelBtnSty: {
    width: WIDTH / 2.6,
    height: moderateScale(50),
    backgroundColor: colors.whiteLight,
    borderColor: colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
  },
  confirmBtnSty: {
    width: WIDTH / 2.6,
    height: moderateScale(50),
  },
  primaryClr: {
    color: colors.primary,
  },
});
