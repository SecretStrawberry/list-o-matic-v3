import React from "react";

import "./ProductItem.scss";

const ProductItem = ({ product, onDeleteProductPressed, onCheckedPressed }) => {
  console.log(product);
  return (
    <div className="product-item-container">
      <input
        onChange={() => onCheckedPressed(product.itemId)}
        type="checkbox"
      />
      <h3>{product.item}</h3>
      <button onClick={() => onDeleteProductPressed(product.itemId)}>
        Delete
      </button>
    </div>
  );
};

export default ProductItem;
