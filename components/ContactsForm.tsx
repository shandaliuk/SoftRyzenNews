import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Container from './Container';
import Check from '../public/icons/check.svg';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  agreement: boolean;
}

const ContactsForm = () => {
  const form = useForm<FormValues>();

  const { register, control, handleSubmit, formState, reset, getValues } = form;

  const [isCheckboxActive, setCheckboxActivity] = useState(() => {
    return getValues('agreement');
  });

  const { errors } = formState;

  const handleCheckboxClick = () => setCheckboxActivity(state => !state);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className="pt-8">
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-black bg-zinc-200 py-6"
        >
          <div className="relative pb-8">
            <label
              htmlFor="name"
              className="block text-center uppercase text-sm md:text-lg xl:text-2xl"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', {
                pattern: {
                  value: /^[A-Za-z\s.'-]+$/,
                  message: 'Invalid name.',
                },
                required: 'Name is required.',
              })}
              className={`block border ${
                errors.name ? 'border-red-400' : 'border-black'
              } mt-2 w-5/6 mx-auto sm:w-4/6 md:w-3/6 xl:w-2/6 md:p-[3px] shadow-strict`}
            />
            {errors.name ? (
              <p className="text-red-400 text-center absolute bottom-1 right-2/4 translate-x-2/4 text-sm">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div className="relative pb-8">
            <label
              htmlFor="phone"
              className="block text-center uppercase text-sm md:text-lg xl:text-2xl"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', {
                required: 'Phone number is required.',
                pattern: {
                  value:
                    /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                  message: 'Invalid phone number format.',
                },
              })}
              className={`block border ${
                errors.phone ? 'border-red-400' : 'border-black'
              } mt-2 w-5/6 mx-auto sm:w-4/6 md:w-3/6 xl:w-2/6 md:p-[3px] shadow-strict`}
            />
            {errors.phone ? (
              <p className="text-red-400 text-center absolute bottom-1 text-sm w-full right-2/4 translate-x-2/4">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div className="relative pb-8">
            <label
              htmlFor="email"
              className="block text-center uppercase text-sm md:text-lg xl:text-2xl"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'E-mail is required.',
                pattern: {
                  value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                  message: 'Invalid e-mail format.',
                },
              })}
              className={`block border ${
                errors.email ? 'border-red-400' : 'border-black'
              } mt-2 w-5/6 mx-auto sm:w-4/6 md:w-3/6 xl:w-2/6 md:p-[3px] shadow-strict`}
            />
            {errors.email ? (
              <p className="text-red-400 text-center absolute bottom-1 text-sm w-full right-2/4 translate-x-2/4">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="relative pb-8 flex flex-col items-center gap-1">
            <label
              htmlFor="agreement"
              className="block text-center uppercase text-sm md:text-lg xl:text-2xl"
            >
              Do you agree to recieve newsletters from our company?
            </label>
            <input
              type="checkbox"
              id="agreement"
              {...register('agreement', {
                required: 'Please agree with the rules.',
              })}
              className="none"
              onClick={handleCheckboxClick}
            />
            <div
              className={`${isCheckboxActive ? 'bg-main' : 'bg-white'} ${
                errors.agreement ? 'border-red-400' : 'border-black'
              } inline-flex items-center justify-center w-5 h-5 border cursor-pointer shadow-strictMini`}
              onClick={handleCheckboxClick}
            >
              {isCheckboxActive ? <Check className="w-full h-full" /> : null}
            </div>
            {errors.agreement ? (
              <p className="text-red-400 text-center absolute bottom-1 text-sm w-full right-2/4 translate-x-2/4">
                {errors.agreement.message}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="block mx-auto py-3 px-5 bg-main md:text-lg text-centersm:w-3/6 lg:w-2/5 xl:text-2xl  border border-black"
          >
            Submit
          </button>
        </form>
        <DevTool control={control} />
      </Container>
    </div>
  );
};

export default ContactsForm;
