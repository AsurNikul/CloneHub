import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonSty} from '../../../theme';
import Header from '../../../components/Header';
import {InputText, PrimaryBtn} from '../../../components/All';
import {FormikProps, useFormik} from 'formik';
import {RequestNewVals} from '../../../constants/FormikVals';
import {RequestSchema} from '../../../constants/schema';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {rootReducerType} from '../../../redux/store';

type Props = {};

type InputVals = {
  app: string;
  reason: string;
};

const RequestNew = (props: Props) => {
  const deviceToken = useSelector(
    (state: rootReducerType) => state.main?.token,
  );
  const formik: FormikProps<InputVals> = useFormik<InputVals>({
    validationSchema: RequestSchema,
    initialValues: RequestNewVals,
    onSubmit: (val: InputVals) => handleSubmit(val),
  });
  const handleSubmit = async (vals: InputVals) => {
    let data = {
      ...vals,
      deviceToken,
    };
    await firestore().collection('request').add(data);
  };
  return (
    <View style={[commonSty.mainCenter]}>
      <Header title="Request New Application" />
      <InputText
        placeholder="Enter App Name"
        title="App Name"
        formik={formik}
        name={'app'}
      />
      <InputText
        placeholder="Enter Reason"
        title="Reason"
        formik={formik}
        multiline={true}
        name={'reason'}
      />
      <PrimaryBtn title="Submit" onPress={formik.handleSubmit} />
    </View>
  );
};

export default RequestNew;

const styles = StyleSheet.create({});
