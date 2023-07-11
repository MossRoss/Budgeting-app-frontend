import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

import "./Transaction.css";

function Transaction() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const navigate = useNavigate();

  async function handleDeleteById(id) {
    try {
      await axios.delete(`http://localhost:3001/transactions/${id}`);
      navigate("/transactions");
    } catch (e) {
      console.log(e);
    }
  }

  async function handleEditById(id) {
    navigate(`/transactions/${id}/edit`);
    //     try {
    //       await axios.put(`http://localhost:3001/transactions/${id}`);
    //       navigate("/transactions");
    //     } catch (e) {
    //       console.log(e);
    //     }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/transactions/${id}`);
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="transaction-container">
      <div>
        <h3>Show</h3>

        <div className="transaction-container-content">
          <p>{data?.item_name} </p>

          <p>{data?.amount} </p>

          <p>{data?.date} </p>

          <p>{data?.from} </p>

          <p>{data?.category} </p>
        </div>

        <div className="transaction-container-navigation">
          <ul>
            <li>
              <button onClick={() => handleEditById(id)}>Edit</button>
            </li>
            <li>
              <button onClick={() => handleDeleteById(id)}>Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
