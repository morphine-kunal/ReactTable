import React, { useRef, FormEvent, useState } from "react";
import Modal from "../ui/Modal.tsx";
import classes from "./AddUserProfile.module.css";
import { useAddUser } from "../../api/PostApi.ts";

interface AddProfileFormProps {
  onClose: () => void;
}

const AddProfileForm: React.FC<AddProfileFormProps> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const roleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { mutate } = useAddUser();

  const handleImageChange = (event: FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setSelectedImage(reader.result as string);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (
      nameInputRef.current &&
      emailInputRef.current &&
      roleInputRef.current
    ) {
      const enteredName = nameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredRole = roleInputRef.current.value;
      const enteredStatus = undefined;
      const enterdDate = undefined;

      const user = {
        name: enteredName,
        email: enteredEmail,
        role: enteredRole,
        status: enteredStatus || "invited",
        dp: selectedImage,
        Last_login: enterdDate || "--------",
      };

      console.log(user);

      mutate(user);
      props.onClose();
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <div className={classes.title}>
          <h1>Add user form</h1>
          <p>Add user to user table</p>
        </div>
        <div>
          <div className={classes.image_holder}>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={imageInputRef}
            />
          </div>
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
