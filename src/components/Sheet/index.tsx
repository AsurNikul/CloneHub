import React, {ReactNode, forwardRef, Ref} from 'react';
import {StyleSheet} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {commonSty} from '../../theme';

interface SheetProps {
  style?: any;
  children?: ReactNode;
}

// Correctly typing the ref with Ref<ActionSheetRef>
const Sheet = forwardRef<ActionSheetRef, SheetProps>(
  ({children, style}, ref: Ref<ActionSheetRef>) => {
    return (
      <ActionSheet
        containerStyle={{
          ...commonSty.pv20,
          backgroundColor: 'transparent',
          ...style, // Apply passed style if any
        }}
        ref={ref}>
        {children}
      </ActionSheet>
    );
  },
);

const styles = StyleSheet.create({});

export default Sheet;
