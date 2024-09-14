import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div key={item.id} className="card">
<<<<<<< HEAD
=======
        <img src={item.image} alt={item.name} className="Hola" />
>>>>>>> refs/remotes/origin/main
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} className="Hola" />
        
      </div>
    </Link>
  );
};

export default Item;
