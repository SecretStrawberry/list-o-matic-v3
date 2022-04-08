import React, { useState } from "react";

import "./ListIndexItem.scss";
import ProductsIndex from "../products/ProductsIndex";

import { AiFillCloseSquare } from "react-icons/ai";

const ListIndexItem = ({ list, onDeletePressed }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="container">
      <div
        className="list-item-container"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h3>{list.listName}</h3>
        <div
          className="delete-container"
          onClick={() => onDeletePressed(list.id)}
        >
          <AiFillCloseSquare className="delete-button" />
        </div>
      </div>

      {isVisible && <ProductsIndex products={list} />}
    </div>
  );
};

export default ListIndexItem;
