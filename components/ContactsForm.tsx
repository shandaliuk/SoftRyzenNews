import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  agreement: boolean;
}

const ContactsForm = () => {
  const form = useForm<FormValues>();

  const { register, control, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  console.log(errors);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <div className="relative pb-8">
          <label
            htmlFor="name"
            className="block text-center uppercase text-sm font-bold text-orange-950"
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
            className={`block border-2 ${
              errors.name ? 'border-red-400' : 'border-orange-950'
            } rounded-lg mt-2 w-full sm:w-3/6 sm:mx-auto lg:w-2/5`}
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
            className="block text-center uppercase text-sm font-bold text-orange-950"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value:
                  /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message: 'Invalid phone number format.',
              },
            })}
            className={`block border-2 ${
              errors.phone ? 'border-red-400' : 'border-orange-950'
            } rounded-lg mt-2 w-full sm:w-3/6 sm:mx-auto lg:w-2/5`}
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
            className="block text-center uppercase text-sm font-bold text-orange-950"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'E-mail is required',
              pattern: {
                value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                message: 'Invalid e-mail format.',
              },
            })}
            className={`block border-2 ${
              errors.email ? 'border-red-400' : 'border-orange-950'
            } rounded-lg mt-2 w-full sm:w-3/6 sm:mx-auto lg:w-2/5`}
          />
          {errors.email ? (
            <p className="text-red-400 text-center absolute bottom-1 text-sm w-full right-2/4 translate-x-2/4">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="relative pb-8">
          <label
            htmlFor="agreement"
            className="block text-center uppercase text-sm font-bold text-orange-950"
          >
            Do you agree to recieve newsletters from our company?
          </label>
          <input
            type="checkbox"
            id="agreement"
            {...register('agreement', {
              required: 'Please agree with the rules.',
            })}
            className="block mx-auto mt-3 w-5 h-5"
          />
          {errors.agreement ? (
            <p className="text-red-400 text-center absolute bottom-1 text-sm w-full right-2/4 translate-x-2/4">
              {errors.agreement.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="block border-2 border-orange-950 rounded-lg px-5 py-2 mx-auto mt-6 text-center uppercase text-sm font-bold bg-orange-950 text-zinc-100"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default ContactsForm;
