import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div key={item.id} className="card">
        <img src={item.image} alt={item.name} className="Hola" />
        <h2>{item.name}</h2>
      </div>
    </Link>
  );
};

export default Item;
