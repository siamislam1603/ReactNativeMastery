import {useFormik} from 'formik';
import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as yup from 'yup';
import FormControl from './components/FormControl';
import {passwordGeneratorSchema} from './lib/schemas';

const initialValues = {
  password: '',
  isLowerCase: true,
  isUpperCase: false,
  isNumber: false,
  isSymbol: false,
};
const App = () => {
  const {getFieldProps} = useFormik({
    initialValues,
    validationSchema: yup.object(passwordGeneratorSchema),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    // for notch
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled" className="p-5">
        <Text className="text-3xl font-medium text-gray-200 mb-6">
          Password Generator
        </Text>
        <FormControl label="Password Length" style="mb-5">
          <TextInput
            keyboardType="number-pad"
            {...getFieldProps('password')}
            placeholder="E.g. 16"
            className="flex-1 px-3 border border-slate-300 rounded-md focus:border-slate-500 focus:border-2"
          />
        </FormControl>
        <FormControl label="Include lowercase" style="mb-5">
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unfillColor="white"
            iconStyle={{borderColor: 'red'}}
            innerIconStyle={{borderWidth: 2}}
            isChecked={true}
          />
        </FormControl>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
