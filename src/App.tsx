import React, { useState } from "react";

import BasicTable from "./components/BasicTable.tsx";
import AddProfileForm from "./components/Forms/AddProfileForm.tsx";
import Header from "./components/Header";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  const showAddFormHandler = () => {
    setShowAddForm(true);
  };

  const hideAddFormHandler = () => {
    setShowAddForm(false);
  };

  return (
    <div>
      {showAddForm && <AddProfileForm onClose={hideAddFormHandler} />}
      <Header />
      <BasicTable onShow={showAddFormHandler} />
    </div>
  );
}

export default App;
