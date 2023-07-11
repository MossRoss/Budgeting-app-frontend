import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Transactions.css";

function Transactions() {
  const [transactionsArray, setTransactionsArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const url =
        process.env.NODE_ENV === "production"
          ? `https://budgeting-app-fronend-deployed.onrender.com/transactions/`
          : `http://localhost:3001/transactions/`;

      let result = await axios.get(url);
      setTransactionsArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h2 className="h2-title">Bank Account Total: 10,500</h2>
      <div className="table-container">
        <table id="transactions">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            {transactionsArray.map(
              ({ item_name, from, date, category, amount, id }) => {
                return (
                  <tr key={id}>
                    <td>
                      <Link
                        className="transactions-link"
                        to={`/transactions/${id}`}
                      >
                        {date}
                      </Link>
                    </td>
                    <td>
                      <Link
                        className="transactions-link"
                        to={`/transactions/${id}`}
                      >
                        {category}
                      </Link>
                    </td>
                    <td>
                      <Link
                        className="transactions-link"
                        to={`/transactions/${id}`}
                      >
                        {amount}
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
