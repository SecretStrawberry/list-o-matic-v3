import React from "react";

import "./ProductItem.scss";

import { RiCloseCircleLine } from "react-icons/ri";

const ProductItem = ({ product, onDeleteProductPressed, onCheckedPressed }) => {
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
        <RiCloseCircleLine />
      </div>
    </div>
  );
};

export default ProductItem;
