import { FieldErrors, UseFormRegister, Path } from 'react-hook-form';

import { FormValues } from '../FormValues';

export interface ContactsFieldInterface {
  setup: {
    register: UseFormRegister<FormValues>;
    fieldName: Path<FormValues>;
    type: string;
    regExp: RegExp;
    errors: FieldErrors<FormValues>;
  };
}
