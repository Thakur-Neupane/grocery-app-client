import { apiProcessor } from "../../services/axios";
const userEP = import.meta.env.VITE_APP_ROOT_SERVER + "/api/v1/users";

export const postNewUser = (data) => {
  const obj = {
    url: userEP,
    method: "post",
    data,
  };
  return apiProcessor(obj);
};
