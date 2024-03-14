import * as yup from 'yup';

export const passwordGeneratorSchema = {
  password: yup
    .number()
    .min(4, 'minimum length must be 4')
    .max(16, 'maximum length must be 16')
    .required()
    .typeError('Invalid value'),
  isLowerCase: yup.boolean().required().typeError('Invalid value'),
  isUpperCase: yup.boolean().required().typeError('Invalid value'),
  isNumber: yup.boolean().required().typeError('Invalid value'),
  isSymbol: yup.boolean().required().typeError('Invalid value'),
};
