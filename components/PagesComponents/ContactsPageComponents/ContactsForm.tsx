import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import Container from '@/components/SharedComponents/Container';
import SignUpNotification from './SignUpNotification';
import Check from '@/assets/icons/check.svg';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  agreement: boolean;
}

const ContactsForm = () => {
  const [isCheckboxChecked, setCheckboxCheck] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      agreement: false,
    },
  });

  const { register, handleSubmit, formState, reset, setValue, getValues } =
    form;

  const handleCheckboxClick = () => {
    setCheckboxCheck(state => !state);
    const value = getValues('agreement');
    setValue('agreement', !value);
  };

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    toast.custom(() => <SignUpNotification name={data.name} />);
    console.log(data);
    setCheckboxCheck(false);
    reset();
  };

  return (
    <div className="pt-8 pb-8 border-b border-black">
      <Toaster />
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-6 border border-black bg-zinc-200"
        >
          <div className="relative pb-8">
            <label
              htmlFor="name"
              className="block text-sm text-center uppercase md:text-lg xl:text-2xl"
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
              } mt-2 w-5/6 px-2 py-1 mx-auto sm:w-4/6 md:w-3/6 xl:w-2/6 shadow-strict focus:bg-accent focus-within:bg-accent transition-color duration-300`}
            />
            {errors.name ? (
              <p className="absolute text-sm text-center text-red-400 bottom-1 right-2/4 translate-x-2/4">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div className="relative pb-8">
            <label
              htmlFor="phone"
              className="block text-sm text-center uppercase md:text-lg xl:text-2xl"
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
              } mt-2 w-5/6 px-2 py-1 mx-auto sm:w-4/6 md:w-3/6 xl:w-2/6 shadow-strict focus:bg-accent focus-within:bg-accent transition-color duration-300`}
            />
            {errors.phone ? (
              <p className="absolute w-full text-sm text-center text-red-400 bottom-1 right-2/4 translate-x-2/4">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div className="relative pb-8">
            <label
              htmlFor="email"
              className="block text-sm text-center uppercase md:text-lg xl:text-2xl"
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
              } mt-2 w-5/6 mx-auto px-2 py-1 sm:w-4/6 md:w-3/6 xl:w-2/6 shadow-strict focus:bg-accent focus-within:bg-accent transition-color duration-300`}
            />
            {errors.email ? (
              <p className="absolute w-full text-sm text-center text-red-400 bottom-1 right-2/4 translate-x-2/4">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="relative flex flex-col items-center gap-1 pb-8">
            <label
              htmlFor="agreement"
              className="block text-sm text-center uppercase md:text-lg xl:text-2xl"
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
            <button
              type="button"
              className={`${isCheckboxChecked ? 'bg-main' : 'bg-white'} ${
                errors.agreement ? 'border-red-400' : 'border-black'
              } inline-flex items-center justify-center w-5 h-5 border cursor-pointer shadow-strictMini focus:bg-accent transition-color duration-300`}
              onClick={handleCheckboxClick}
            >
              {isCheckboxChecked ? <Check className="w-full h-full" /> : null}
            </button>
            {errors.agreement ? (
              <p className="absolute w-full text-sm text-center text-red-400 bottom-1 right-2/4 translate-x-2/4">
                {errors.agreement.message}
              </p>
            ) : null}
          </div>
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
