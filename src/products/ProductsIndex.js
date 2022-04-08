import React from "react";
import { connect } from "react-redux";

import { deleteProduct, checkProduct } from "../list/actions";
import NewProductForm from "./NewProductForm";
import ProductItem from "./ProductItem";

import "./ProductsIndex.scss";

const ProductsIndex = ({
  products,
  onDeleteProductPressed,
  onCheckedPressed,
}) => {
  return (
    <div className="products-index">
      <NewProductForm products={products} />

      {products.products.map((item) => (
        <ProductItem
          product={item}
          onDeleteProductPressed={onDeleteProductPressed}
          onCheckedPressed={onCheckedPressed}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteProductPressed: (itemId) => dispatch(deleteProduct(itemId)),
  onCheckedPressed: (itemId) => dispatch(checkProduct(itemId)),
});

export default connect(null, mapDispatchToProps)(ProductsIndex);
