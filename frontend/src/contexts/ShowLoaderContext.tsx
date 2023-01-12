import React, { createContext } from "react";

export const ShowLoaderContext = createContext<{
  showLoader: boolean;
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>> | any;
}>({
  showLoader: false,
  setShowLoader: null,
});
