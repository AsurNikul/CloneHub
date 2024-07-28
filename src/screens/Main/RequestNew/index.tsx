import {StyleSheet, Text, View} from 'react-native';
import React, {SetStateAction, useState} from 'react';
import {commonSty} from '../../../theme';
import Header from '../../../components/Header';
import {InputText, PrimaryBtn, TextField} from '../../../components/All';
import {FormikProps, useFormik} from 'formik';
import {RequestNewVals} from '../../../constants/FormikVals';
import {RequestSchema} from '../../../constants/schema';

type Props = {};

type InputVals = {
  app: string;
  reason: string;
};

const RequestNew = (props: Props) => {
  const formik: FormikProps<InputVals> = useFormik<InputVals>({
    validationSchema: RequestSchema,
    initialValues: RequestNewVals,
    onSubmit: (val: InputVals) => {
      console.log(val, 'this is val');
      handleSubmit(val);
    },
  });
  console.log(formik, 'hello it is formik');
  const handleSubmit = (vals: InputVals) => {
    console.log(vals, 'thi is vals');
  };
  return (
    <View style={[commonSty.mainCenter]}>
      <Header title="Request New Application" />
      <InputText
        placeholder="Enter App Name"
        title="App Name"
        formik={formik}
        name={'App'}
      />
      <InputText
        placeholder="Enter Reason"
        title="Reason"
        formik={formik}
        multiline={true}
        name={'reason'}
      />
      <PrimaryBtn
        title="Submit"
        onPress={() => {
          formik.handleSubmit();
          console.log('handleSubmit is called');
        }}
      />
    </View>
  );
};

export default RequestNew;

const styles = StyleSheet.create({});
