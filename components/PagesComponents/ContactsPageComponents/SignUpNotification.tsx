interface SignUpNotificationProps {
  name: string;
}

const SignUpNotification = ({ name }: SignUpNotificationProps) => {
  return (
    <div className="bg-zinc-200 px-6 py-4 shadow-md border border-black animate-bounce">
      <span className="uppercase">{`${name} successfully subscribed`}</span>
    </div>
  );
};

export default SignUpNotification;
