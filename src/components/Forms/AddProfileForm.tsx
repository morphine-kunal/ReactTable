import React, { useRef, FormEvent } from "react";
import Modal from "../ui/Modal.tsx";
import classes from "./AddUserProfile.module.css";

interface AddProfileFormProps {
  onClose: () => void;
}

const AddProfileForm: React.FC<AddProfileFormProps> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const roleInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (nameInputRef.current && emailInputRef.current && roleInputRef.current) {
      const enteredName = nameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredRole = roleInputRef.current.value;

      const user = {
        name: enteredName,
        email: enteredEmail,
        role: enteredRole,
      };

      console.log(user);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <div className={classes.title}>
          <h1>Add user form</h1>
          <p>Add user to user table</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.name_holder}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              placeholder="Enter name"
              ref={nameInputRef}
            />
          </div>
          <div className={classes.email_holder}>
            <label htmlFor="email">Email Id</label>
            <input
              type="text"
              required
              placeholder="Enter email"
              ref={emailInputRef}
            />
          </div>
          <div className={classes.role_holder}>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              required
              placeholder="Enter Role"
              ref={roleInputRef}
            />
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
