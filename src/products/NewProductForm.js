import React, { useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../list/actions";

import { BsCheckLg } from "react-icons/bs";

import "./NewProductForm.scss";

const NewProductForm = ({ products, onCreateProductPressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-product-form">
      <input
        className="product-form-input"
        type="text"
        placeholder="Add Product"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div
        className="add-product-btn"
        onClick={() => {
          const id = products.id;
          /// Check for products duplicates
          const isDuplicate = products.products.some(
            (item) => item.item === inputValue
          );
          if (!isDuplicate) {
            onCreateProductPressed(inputValue, id);
            setInputValue("");
          }
        }}
      >
        <BsCheckLg />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCreateProductPressed: (text, id) => dispatch(addProduct(text, id)),
});

export default connect(null, mapDispatchToProps)(NewProductForm);
