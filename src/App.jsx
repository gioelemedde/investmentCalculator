import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { useState } from "react";
import Table from "./components/Table";

function App() {

 
  
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
  });

  const inputIsValid = userInput.duration >= 1

  function handleChange(inputIdentifier,newValue) {
    setUserInput((prev) => ({
      ...prev,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <Form userInput={userInput} onChange={handleChange} />
     { inputIsValid && <Table userInput={userInput}/>}
     { !inputIsValid && <p className="center">Inserire una durata maggiore di 0 </p>}
    </>
  );
}

export default App;
