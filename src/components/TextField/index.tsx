import React, {useState} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import Typography from '../Typo';

import styles from './styles';
import {colors, commonSty} from '../../theme';

interface TextFieldProps extends TextInputProps {
  textInputStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  RightIconStyle?: StyleProp<ImageStyle>;
  rightIconPress?: () => void;
  rightIcon?: any; // You can replace 'any' with the specific type for the rightIcon (e.g., ImageSourcePropType)
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  tit?: string;
  leftIcon?: any; // You can replace 'any' with the specific type for the leftIcon (e.g., ImageSourcePropType)
  mainContainer?: StyleProp<ViewStyle>;
  errTitle?: string;
  errors?: boolean;
  touched?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  textInputStyle,
  iconStyle,
  inputContainerStyle,
  RightIconStyle,
  rightIconPress,
  rightIcon,
  title,
  titleStyle,
  tit,
  leftIcon,
  mainContainer,
  errTitle,
  errors,
  touched,
  ...props
}) => {
  return (
    <View style={[{marginTop: verticalScale(13)}, mainContainer]}>
      {title && (
        <Typography title={title} txtStyle={[styles.titleStyle, titleStyle]} />
      )}
      <View
        style={[
          styles.inputContainerStyle,
          inputContainerStyle,
          {
            height: props.multiline ? moderateScale(120) : moderateScale(45),
          },
        ]}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.iconStyle, iconStyle]}
            resizeMode="cover"
          />
        )}
        <TextInput
          style={[
            styles.textInputStyle,
            textInputStyle,
            {
              height: props.multiline ? moderateScale(120) : moderateScale(45),
              marginTop: props.multiline ? moderateScale(10) : moderateScale(0),
            },
          ]}
          placeholderTextColor={colors.black}
          textAlignVertical={props.multiline ? 'top' : 'auto'}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity onPress={rightIconPress}>
            <Image
              source={rightIcon}
              style={[styles.RightIconStyle, RightIconStyle]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {errors && touched && (
        <Typography title={errTitle} txtStyle={commonSty.error} />
      )}
    </View>
  );
};

export default TextField;
