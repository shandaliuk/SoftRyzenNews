import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';

import { FormValues } from './FormValues';

import SignUpNotification from '../SignUpNotification/SignUpNotification';
import ContactsField from './ContactsField/ContactsField';
import ContactsCheckbox from './ContactsCheckbox/ContactsCheckbox';

import Container from '@/components/SharedComponents/Container';

const ContactsForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      agreement: false,
    },
  });

  const { register, handleSubmit, formState, reset, setValue, getValues } =
    form;

  const { errors } = formState;

  const [isCheckboxChecked, setCheckboxCheck] = useState(false);

  const handleCheckboxClick = () => {
    setCheckboxCheck(state => !state);
    const value = getValues('agreement');
    setValue('agreement', !value);
  };

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    toast.custom(() => <SignUpNotification name={data.name} />);
    console.log(data);
    setCheckboxCheck(false);
    reset();
  };

  return (
    <div>
      <Toaster />
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-6 border border-black bg-zinc-200"
        >
          <ContactsField
            setup={{
              register,
              fieldName: 'name',
              type: 'text',
              regExp: /^[A-Za-z\s.'-]+$/,
              errors,
            }}
          />
          <ContactsField
            setup={{
              register,
              fieldName: 'phone',
              type: 'tel',
              regExp:
                /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
              errors,
            }}
          />
          <ContactsField
            setup={{
              register,
              fieldName: 'email',
              type: 'email',
              regExp: /^[\w\.-]+@[\w\.-]+\.\w+$/,
              errors,
            }}
          />
          <ContactsCheckbox
            setup={{
              register,
              fieldName: 'agreement',
              title: 'Do you agree to recieve newsletters from our company?',
              errors,
              isCheckboxChecked,
              handleCheckboxClick,
            }}
          />
          <button
            type="submit"
            className="block px-5 py-3 mx-auto uppercase duration-300 border border-black bg-main md:text-lg text-centersm:w-3/6 lg:w-1/5 xl:text-2xl shadow-strict focus:bg-accent hover:bg-accent transition-color"
          >
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default ContactsForm;
