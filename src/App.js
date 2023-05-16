import React, { useState } from "react";

import BasicTable from "./components/BasicTable";
import AddProfileForm from "./components/Forms/AddProfileForm";
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
