import { useMutation } from "react-query";
import axios from "axios";

const postUser = (user: any) => {
  return axios.post(
    "https://users-edbd4-default-rtdb.firebaseio.com/users.json",
    user
  );
};

export const useAddUser = () => {
  return useMutation(postUser);
};
