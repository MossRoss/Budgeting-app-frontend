import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transactions from "./components/Transactions/Transactions";
import Transaction from "./components/Transaction/Transaction";
import EditForm from "./components/EditForm/EditForm";
import Nav from "./components/Nav/Nav";
import TransactionForm from "./components/TransactionForm/TransactionForm";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/new" element={<TransactionForm />} />
        <Route path="/transactions/:id" element={<Transaction />} />
        <Route path="/transactions/:id/edit" element={<EditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
