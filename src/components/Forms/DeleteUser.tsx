import React from "react";
import classes from "./DeleteUser.module.css";
import Modal from "../ui/Modal.tsx";

const DeleteUser = (props:any) => {
  return (
    <Modal>
      <div className={classes.main}>
        <div className={classes.heading}>
          <h2>Are you sure you want to delete?</h2>
        </div>
        <div className={classes.btn_container}>
          <button className={classes.confirm}>Conifrm</button>
          <button className={classes.cancel}onClick={props.onHide}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUser;
