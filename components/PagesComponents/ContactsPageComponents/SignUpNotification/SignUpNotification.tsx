import { SignUpNotificationInterface } from './SignUpNotificationInterface';

const SignUpNotification = ({ name }: SignUpNotificationInterface) => {
  return (
    <div className="px-6 py-4 border border-black shadow-md bg-zinc-200 animate-bounce">
      <span className="uppercase">{`${name} successfully subscribed`}</span>
    </div>
  );
};

export default SignUpNotification;
