import { useState } from "react";

interface FormProps {
  type: string;
  name: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
}
export default function FormField(props: FormProps) {
  // * Placeholder and Icon values
  let attributes = {};
  let icon = <></>;

  if (props.type === "text" && props.name === "username") {
    icon = <UserIcon />;
    attributes = {
      required: props.required,
      type: props.type,
      placeholder: "Username",
      name: props.name,
    };
  } else if (props.type === "password") {
    icon = <PasswordIcon />;
    attributes = {
      required: props.required,
      type: props.type,
      placeholder: "Password",
      name: props.name,
      minLength: props.minLength,
      maxLength: props.maxLength,
    };
  } else if (props.type === "email") {
    icon = <MailIcon />;
    attributes = {
      required: props.required,
      type: props.type,
      placeholder: "Email",
      name: props.name,
      pattern: props.pattern,
    };
  }

  const [fieldIsFocused, setFieldIsFocused] = useState(false);
  return (
    <div
      className="flex justify-between items-center relative"
      onFocus={() => {
        setFieldIsFocused(true);
      }}
      onBlur={() => {
        setFieldIsFocused(false);
      }}
    >
      <input {...attributes} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={
          "field-icon w-6 h-6 absolute right-3 opacity-30 stroke-pink" +
          (fieldIsFocused ? " opacity-100" : "")
        }
      >
        {icon}
      </svg>
    </div>
  );
}

const MailIcon = () => {
  return (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  );
};

const PasswordIcon = () => {
  return (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  );
};

const UserIcon = () => {
  return (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  );
};
