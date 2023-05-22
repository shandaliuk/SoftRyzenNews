import { FieldErrors, UseFormRegister, Path } from 'react-hook-form';
import { FormValues } from './ContactsForm';

interface ContactsFieldProps {
  setup: {
    register: UseFormRegister<FormValues>;
    fieldName: Path<FormValues>;
    type: string;
    regExp: RegExp;
    errors: FieldErrors<FormValues>;
  };
}

const ContactsField = ({
  setup: { register, fieldName, regExp, type, errors },
}: ContactsFieldProps) => {
  return (
    <div className="relative mb-8">
      <label className="block text-sm text-center uppercase md:text-lg xl:text-2xl">
        <span className="block mb-2">{fieldName}</span>
        <input
          type={type}
          id={fieldName}
          {...register(fieldName, {
            pattern: {
              value: regExp,
              message: `Invalid ${fieldName}.`,
            },
            required: `${
              fieldName.slice(0, 1).toUpperCase() + fieldName.slice(1)
            } is required.`,
          })}
          className={`block border ${
            errors[fieldName] ? 'border-red-400' : 'border-black'
          } w-5/6 px-2 py-1 mx-auto sm:w-4/6 md:w-3/6 xl:w-2/6 shadow-strict focus:bg-accent focus-within:bg-accent transition-color duration-300`}
        />
      </label>
      {errors[fieldName] ? (
        <p className="absolute text-sm text-center text-red-400 bottom-[-28px] right-2/4 translate-x-2/4">
          {errors[fieldName]?.message}
        </p>
      ) : null}
    </div>
  );
};

export default ContactsField;
