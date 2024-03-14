import React from 'react';
import {Text, View} from 'react-native';

type FormProps = {
  label: string;
  children?: JSX.Element;
  style?: string;
};

export default function FormControl({label, children, style}: FormProps) {
  console.log({style});
  return (
    <View
      className={`flex flex-row gap-20 items-center justify-between ${style}`}>
      <Text className="text-lg">{label}</Text>
      {children}
    </View>
  );
}
