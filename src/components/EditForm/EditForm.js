import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./EditForm.css";

function EditForm() {
  const { id } = useParams();

  const [itemNameState, setItemNameState] = useState("");
  const [amountState, setAmountState] = useState("");
  const [dateState, setDateState] = useState("");
  const [fromState, setFromState] = useState("");
  const [categoryState, setCategoryState] = useState("");

  useEffect(() => {
    handleFetchData();
  }, []);

  async function handleFetchData() {
    try {
      let { data } = await axios.get(
        `http://localhost:3001/transactions/${id}`
      );

      const { item_name, amount, date, from, category } = data;
      setItemNameState(item_name);
      setAmountState(amount);
      setDateState(date);
      setFromState(from);
      setCategoryState(category);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/transactions/${id}`, {
        itemName: itemNameState,
        amount: amountState,
        date: dateState,
        from: fromState,
        category: categoryState,
      });
      console.log(categoryState);

      alert("Updated sucessfully");
    } catch (e) {
      console.log(e.response);
    }
  }

  return (
    <div className="edit-form-container">
      <div>
        <h2>Edit</h2>
      </div>

      <div className="edit-container-form">
        <form onSubmit={handleOnSubmit}>
          <div className="edit-container-input">
            <label>item_name</label>
            <input
              type="text"
              value={itemNameState}
              onChange={(e) => setItemNameState(e.target.value)}
            />
          </div>

          <div className="edit-container-input">
            <label>amount</label>
            <input
              type="number"
              value={amountState}
              onChange={(e) => setAmountState(e.target.value)}
            />

            <div className="edit-container-input">
              <label>date</label>
              <input
                type="text"
                value={dateState}
                onChange={(e) => setDateState(e.target.value)}
              />

              <div className="edit-container-input">
                <label>from</label>
                <input
                  type="text"
                  value={fromState}
                  onChange={(e) => setFromState(e.target.value)}
                />
              </div>

              <div className="edit-container-input">
                <label>category</label>
                <input
                  type="text"
                  value={categoryState}
                  onChange={(e) => setCategoryState(e.target.value)}
                />
              </div>

              <button className="edit-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
