import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

import { FormValues } from '../FormValues';

export interface ContactsCheckboxInterface {
  setup: {
    register: UseFormRegister<FormValues>;
    fieldName: Path<FormValues>;
    title: string;
    errors: FieldErrors<FormValues>;
    isCheckboxChecked: boolean;
    handleCheckboxClick: () => void;
  };
}
