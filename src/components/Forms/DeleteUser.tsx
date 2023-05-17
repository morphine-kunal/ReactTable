import React  from "react";
import classes from "./DeleteUser.module.css";
import Modal from "../ui/Modal.tsx";

import { useMutation } from "react-query";
import axios from "axios";

interface DeleteUserProps {
  id: string;
  onHide: () => void;
}

const deleteUser = async (id: any) => {
  try {
    const response = await axios.delete(
      `https://users-edbd4-default-rtdb.firebaseio.com/users/${id}.json`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const DeleteUser: React.FC<DeleteUserProps> = (props: any) => {
  const mutation = useMutation(() => deleteUser(props.id));

  const submitHandler = () => {
    mutation.mutate();
    props.onHide();

    if (mutation.isError) {
      console.log(mutation.error.message);
    }
  };

  return (
    <Modal>
      <div className={classes.main}>
        <div className={classes.heading}>
          <h2>Are you sure you want to delete?</h2>
        </div>
        <div className={classes.btn_container}>
          <button className={classes.confirm} onClick={submitHandler}>
            Conifrm
          </button>
          <button className={classes.cancel} onClick={props.onHide}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUser;
