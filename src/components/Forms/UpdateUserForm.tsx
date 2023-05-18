import React, { useRef, FormEvent, useState } from "react";
import Modal from "../ui/Modal.tsx";
import classes from "./AddUserProfile.module.css";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

interface UpdateUserFormProps {
  id: string;
  name: string;
  role: string;
  status: string;
  lastLogin: string;
  onHide: () => void;
}

const updateUser = async (
  id: string,
  updatedData: {
    name?: string;
    role?: string;
    status?: string;
    Last_login?: string;
  }
) => {
  try {
    const response = await axios.patch(
      `https://users-edbd4-default-rtdb.firebaseio.com/users/${id}.json`,
      updatedData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

const UpdateUserForm: React.FC<UpdateUserFormProps> = (props) => {
  const [editedName, setEditedName] = useState(props.name);
  const [editedRole, setEditedRole] = useState(props.role);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const roleInputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const mutation = useMutation((data: any) => updateUser(props.id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (nameInputRef.current && roleInputRef.current) {
      const enteredName = nameInputRef.current.value;
      const enteredRole = roleInputRef.current.value;

      const updatedUser = {
        ...props,
        name: enteredName,
        role: enteredRole,
      };

      await mutation.mutateAsync(updatedUser);
      props.onHide();
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
            <input
              type="text"
              placeholder="Enter name"
              ref={nameInputRef}
              defaultValue={editedName || props.name}
              onChange={(event) => setEditedName(event.target.value)}
              required
            />
          </div>
          <div className={classes.role_holder}>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              placeholder="Enter Role"
              ref={roleInputRef}
              defaultValue={editedRole || props.role}
              onChange={(event) => setEditedRole(event.target.value)}
              required
            />
          </div>
          <div className={classes.btn_holder}>
            <button className={classes.add_btn} disabled={mutation.isLoading}>
              {mutation.isLoading ? "Updating..." : "Update Profile"}
            </button>
            <button
              className={classes.add_btn}
              onClick={props.onHide}
              disabled={mutation.isLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateUserForm;
