import React, { createContext } from "react";

export const ShowErrorContext = createContext<{
  error: {
    show: boolean;
    message: string;
  };
  setShowError:
    | React.Dispatch<
        React.SetStateAction<{
          show: boolean;
          message: string;
        }>
      >
    | any;
}>({
  error: {
    show: false,
    message: "",
  },
  setShowError: null,
});
