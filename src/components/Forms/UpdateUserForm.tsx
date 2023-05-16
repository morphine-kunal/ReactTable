import React, { useRef, FormEvent } from "react";
import Modal from "../ui/Modal.tsx";
import classes from "./AddUserProfile.module.css";

interface EditProfileProps {
  onClose: () => void;
}

const UpdateUserform: React.FC<EditProfileProps> = (props: any) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const roleInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (nameInputRef.current && roleInputRef.current) {
      const enteredName = nameInputRef.current.value;
      const enteredRole = roleInputRef.current.value;

      const editedUser = {
        name: enteredName,
        role: enteredRole,
      };
      console.log(editedUser);
    }
  };

  return (
    <Modal>
      <div>
        <div className={classes.title}>
          <h1>Update User</h1>
          <p>Update user profile in the user table.</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.name_holder}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter name" ref={nameInputRef} />
          </div>
          <div className={classes.role_holder}>
            <label htmlFor="role">Role</label>
            <input type="text" placeholder="Enter Role" ref={roleInputRef} />
          </div>
          <div className={classes.btn_holder}>
            <button className={classes.add_btn}>Update Profile</button>
            <button className={classes.add_btn} onClick={props.onHide}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateUserform;
