import React, { useEffect, useState } from "react";
import axios from "axios";

const FruitShop = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/fruits")
      .then((response) => {
        setFruits(response.data);
      })
      .catch((error) => console.error("Error fetching fruits:", error));
  }, []);

  return (
    <div>
      <h1>Welcome to the Fruit Shop</h1>
      <table
        border="1"
        style={{ width: "50%", margin: "auto", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Fruit Name</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>{fruit.id}</td>
              <td>{fruit.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FruitShop;
