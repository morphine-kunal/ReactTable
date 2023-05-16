import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import BasicTable from "./components/BasicTable.tsx";
import AddProfileForm from "./components/Forms/AddProfileForm.tsx";
import Header from "./components/Header.tsx";
import UpdateUserForm from "./components/Forms/UpdateUserForm.tsx";
import DeleteUser from "./components/Forms/DeleteUser.tsx";

const queryClient = new QueryClient();

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [shoeDelete, setShowDelete] = useState(false);

  const showAddFormHandler = () => {
    setShowAddForm(true);
  };

  const hideAddFormHandler = () => {
    setShowAddForm(false);
  };

  const showUpdateHandler = () => {
    setShowUpdateForm(true);
  };
  const hideUpdateFormHandler = () => {
    setShowUpdateForm(false);
  };

  const showDeleteHandler = () => {
    setShowDelete(true);
  };
  const hideDeleteHandler = () => {
    setShowDelete(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {shoeDelete && <DeleteUser onHide={hideDeleteHandler} />}
        {showUpdateForm && <UpdateUserForm onHide={hideUpdateFormHandler} />}
        {showAddForm && <AddProfileForm onClose={hideAddFormHandler} />}
        <Header />
        <BasicTable
          onShow={showAddFormHandler}
          onEdit={showUpdateHandler}
          onVisible={showDeleteHandler}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
