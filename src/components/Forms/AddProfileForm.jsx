import React, { useRef } from "react";
import Modal from "../ui/Modal";
import classes from "./AddUserProfile.module.css";

const AddProfileForm = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <div className={classes.title}>
          <h1>Add user form</h1>
          <p>Add user to user table</p>
        </div>
        <form>
          <div className={classes.name_holder}>
            <label htmlFor="name">Name</label>
            <input type="text" required placeholder="Enter name" />
          </div>
          <div className={classes.email_holder}>
            <label htmlFor="email">Email Id</label>
            <input type="text" required placeholder="Enter email" />
          </div>
          <div className={classes.role_holder}>
            <label htmlFor="role">Role</label>
            <input type="text" required placeholder="Enter Role" />
          </div>
          <div className={classes.btn_holder}>
            <button className={classes.add_btn}>Add user</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddProfileForm;
