import ContactsForm from './Form/ContactsForm';

import Container from '@/components/SharedComponents/Container';

const SignUp = () => {
  return (
    <section className="pt-[46px] md:pt-[52px] xl:pt-[51px] mb-8">
      <div className="mb-8 border-t border-b border-black bg-zinc-200">
        <Container>
          <h2 className="py-2 text-5xl font-black text-center uppercase sm:text-6xl md:text-8xl xl:text-9xl">
            Sing up to our newsletters!
          </h2>
        </Container>
      </div>
      <ContactsForm />
    </section>
  );
};

export default SignUp;
