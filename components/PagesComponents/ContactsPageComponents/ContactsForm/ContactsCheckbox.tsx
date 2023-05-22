import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import Check from '@/assets/icons/check.svg';
import { FormValues } from './ContactsForm';

interface ContactsCheckboxProps {
  setup: {
    register: UseFormRegister<FormValues>;
    fieldName: Path<FormValues>;
    title: string;
    errors: FieldErrors<FormValues>;
    isCheckboxChecked: boolean;
    handleCheckboxClick: () => void;
  };
}

const ContactsCheckbox = ({
  setup: {
    register,
    fieldName,
    title,
    errors,
    isCheckboxChecked,
    handleCheckboxClick,
  },
}: ContactsCheckboxProps) => {
  return (
    <div className="relative flex flex-col items-center gap-1 mb-8">
      <label className="block text-sm text-center uppercase md:text-lg xl:text-2xl">
        <span>{title}</span>
        <input
          type="checkbox"
          id={fieldName}
          {...register(fieldName, {
            required: 'Please agree with the rules.',
          })}
          className="none"
          onClick={handleCheckboxClick}
        />
      </label>
      <button
        type="button"
        className={`${isCheckboxChecked ? 'bg-main' : 'bg-white'} ${
          errors.agreement ? 'border-red-400' : 'border-black'
        } inline-flex items-center justify-center w-5 h-5 border cursor-pointer shadow-strictMini focus:bg-accent transition-color duration-300`}
        onClick={handleCheckboxClick}
      >
        {isCheckboxChecked ? <Check className="w-full h-full" /> : null}
      </button>
      {errors[fieldName] ? (
        <p className="absolute w-full text-sm text-center text-red-400 bottom-[-25px] right-2/4 translate-x-2/4">
          {errors[fieldName]?.message}
        </p>
      ) : null}
    </div>
  );
};

export default ContactsCheckbox;
