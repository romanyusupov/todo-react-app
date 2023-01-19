import React from "react";
import PersonalInfoForm from "../chapter5Less6/forms/PersonalInfoForm";
import ResultPage from "../chapter5Less6/forms/ResultPage";
import AddressForm from "../chapter5Less6/forms/AdressForm";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    street: "",
    flatNumber: "",
  });

  const nextStep = (address) => {
    navigate(address);
  };

  console.log("главная форма", formData);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PersonalInfoForm setFormData={setFormData} nextStep={nextStep} />
          }
          exact
        />
        <Route
          path="/address"
          element={
            <AddressForm
              setFormData={setFormData}
              formData={formData}
              nextStep={nextStep}
            />
          }
          exact
        />

        <Route
          path="/result"
          element={
            <ResultPage
              setFormData={setFormData}
              formData={formData}
              nextStep={nextStep}
            />
          }
          exact
        />
      </Routes>
    </div>
  );
};

export default App;
