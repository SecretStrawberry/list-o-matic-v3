import React from "react";

import "./ProductItem.scss";

import { AiFillCloseSquare } from "react-icons/ai";

const ProductItem = ({ product, onDeleteProductPressed, onCheckedPressed }) => {
  console.log(product);
  return (
    <div className="product-item-container">
      <input
        onChange={() => onCheckedPressed(product.itemId)}
        type="checkbox"
      />
      <h3>{product.item}</h3>
      <div
        className="delete-btn"
        onClick={() => onDeleteProductPressed(product.itemId)}
      >
        <AiFillCloseSquare />
      </div>
    </div>
  );
};

export default ProductItem;
