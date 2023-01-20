interface MessageProps {
  message: string;
  sender: string;
  sender_image?: string;
  sent?: boolean;
}
export default function Message(props: MessageProps) {
  return (
    <div className={"w-full flex" + (props.sent ? " justify-end my-3" : "")}>
      <div
        className={
          "w-fit max-w-[90%] md:max-w-[70%] break-words p-2 rounded-2xl shadow-md" +
          (props.sent
            ? " bg-pink text-white rounded-br-none selection:bg-dark-blue"
            : " bg-white rounded-bl-none")
        }
      >
        {props.message}
      </div>
    </div>
  );
}
