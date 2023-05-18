interface SignUpNotificationProps {
  name: string;
  visibility: boolean;
}

const SignUpNotification = ({ name, visibility }: SignUpNotificationProps) => {
  return (
    <div
      className={`bg-zinc-200 px-6 py-4 shadow-md border border-black ${
        visibility ? 'animate-bounce' : 'animate-bounce'
      }`}
    >
      <span className="uppercase">{`${name} sucessfully subscribed`}</span>
    </div>
  );
};

export default SignUpNotification;
