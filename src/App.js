/*import Container from "./components/Container";
import IncomeContainer from "./components/IncomeContainer";
import ExpenseContainer from "./components/ExpenseContainer";
import Form from '../src/components/Form'
import VariablesContext from "./CustomHooks/VariablesContext";
import Transactions from "./components/Transactions";
function App() {
  return (
    <VariablesContext>
      <div className="container">
        <div className="child" >
          <h2 style={{textAlign : "center"}}>Expense Tracker</h2>
          <Container />
          <div className="inc-exp-container">
              <IncomeContainer />
              <ExpenseContainer />
          </div>
          <h3>Add New Transaction</h3>
          <Form />
        </div>
        <div className="child">
          <h3>History</h3>
          <Transactions />
        </div> 
      </div>
    </VariablesContext>
  );
}

export default App;*/

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header"; // Import Header component
import Container from "./components/Container";
import IncomeContainer from "./components/IncomeContainer";
import ExpenseContainer from "./components/ExpenseContainer";
import Form from '../src/components/Form'
import VariablesContext from "./CustomHooks/VariablesContext";
import Transactions from "./components/Transactions";

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <VariablesContext>
          <div className="container">
            <div className="child" >
              <Container />
              <div className="inc-exp-container">
                  <IncomeContainer />
                  <ExpenseContainer />
              </div>
              <h3>Add New Transaction</h3>
              <Form />
            </div>
            <div className="child">
              <h3>History</h3>
              <Transactions />
            </div> 
          </div>
        </VariablesContext>
      </div>
    </Router>
  );
}

export default App;

