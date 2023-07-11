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
      let result = await axios.get("http://localhost:3001/transactions/ ");
      setTransactionsArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h2 className="h2-title">Bank Account Total: 133</h2>
      <div className="table-container">
        <table id="transactions">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            {transactionsArray.map(({ date, category, amount, id }) => {
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
