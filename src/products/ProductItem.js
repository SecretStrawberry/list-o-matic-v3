import React from "react";

import "./ProductItem.scss";

import { RiCloseCircleLine } from "react-icons/ri";

export const ProductItem = ({
  product,
  onDeleteProductPressed,
  onCheckedPressed,
}) => {
  return (
    <>
      {product.isChecked === false ? (
        <div className="product-item-container">
          <input
            className="product-checkbox"
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
      ) : (
        ""
      )}
    </>
  );
};

export const ProductItemChecked = ({
  product,
  onDeleteProductPressed,
  onCheckedPressed,
}) => {
  return (
    <>
      {product.isChecked === true ? (
        <div className="product-item-container">
          <input
            className="product-checkbox"
            onChange={() => onCheckedPressed(product.itemId)}
            type="checkbox"
            checked
          />
          <h3>{product.item}</h3>
          <div
            className="delete-btn"
            onClick={() => onDeleteProductPressed(product.itemId)}
          >
            <RiCloseCircleLine />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
