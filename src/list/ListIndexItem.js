import React, { useState } from "react";

import "./ListIndexItem.scss";
import ProductsIndex from "../products/ProductsIndex";

import { AiFillCloseSquare } from "react-icons/ai";
import styled from "styled-components";

const ListItemsSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

//TODO: lifebar
const ListItemsLifeBar = styled.div`
  position: relative;
  width: 80%;
  height: 1.4rem;
  background-color: #f4d03f;
  &::after {
    position: absolute;
    content: "";
    top: 0.2rem;
    left: 0;
    width: ${(props) => (props.noic * 100) / props.noi}%;
    height: 1rem;
    background-color: #4d96ff;
    transition: all 0.2s;
    box-shadow: 0 0 5px rgb(0, 0, 0);
  }
`;

const ListIndexItem = ({ list, onDeletePressed }) => {
  const [isVisible, setIsVisible] = useState(false);

  const numberOfItems = list.products.length;
  const numberOfItemsChecked = list.products
    .map((item) => item.isChecked)
    .filter((item) => item === true).length;

  return (
    <div className="container">
      <div className="list-item-container">
        <div
          className="list-title-delete"
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
        <ListItemsSummary>
          <ListItemsLifeBar
            noi={numberOfItems}
            noic={numberOfItemsChecked}
          ></ListItemsLifeBar>
          <h2>
            {numberOfItemsChecked} / {numberOfItems}
          </h2>
        </ListItemsSummary>
      </div>

      {isVisible && <ProductsIndex products={list} />}
    </div>
  );
};

export default ListIndexItem;
