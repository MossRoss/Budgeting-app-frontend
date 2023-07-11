import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./TransactionForm.css";

function TransactionForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/transactions/ ");

      alert("Successful post");
      navigate("/transactions");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="form-form-container">
      <div>
        <h2>New</h2>
      </div>

      <div className="form-container-form">
        <form onSubmit={handleOnSubmit}>
          <div className="form-container-input">
            <label>Item_Name</label>
            <input
              type="text"
              value={data.item_name}
              onChange={(e) => {
                setData({ ...data, item_name: e.target.value });
              }}
            />
          </div>

          <div className="form-container-input">
            <label>Amount</label>
            <input
              type="number"
              value={data.amount}
              onChange={(e) => {
                setData({ ...data, amount: e.target.value });
              }}
            />

            <div className="form-container-input">
              <label>Date</label>
              <input
                type="text"
                value={data.date}
                onChange={(e) => {
                  setData({ ...data, date: e.target.value });
                }}
              />

              <div className="form-container-input">
                <label>From</label>
                <input
                  type="text"
                  value={data.from}
                  onChange={(e) => {
                    setData({ ...data, from: e.target.value });
                  }}
                />
              </div>

              <div className="form-container-input">
                <label>Category</label>
                <input
                  type="text"
                  value={data.category}
                  onChange={(e) => {
                    setData({ ...data, category: e.target.value });
                  }}
                />
              </div>

              <button className="form-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
