import { toast } from "react-toastify";

import { postNewUser } from "./userAxios";

const apiProcessorWithToast = async (obj, func) => {
  const pending = func(obj);
  toast.promise(pending, {
    pending: "Please Wait ......",
  });

  const response = await pending;
  toast[response.status](response.message);
  return response;
};

export const createNewUserAction = async (userData) => {
  apiProcessorWithToast(userData, postNewUser);
};
