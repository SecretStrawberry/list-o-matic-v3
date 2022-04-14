import React, { useState } from "react";

import ProductsIndex from "../products/ProductsIndex";

import { AiFillCloseSquare } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

import "./ListIndexItem.scss";

import styled from "styled-components";

const ListItemsSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  /* border: 1px solid red; */
`;

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

const DropDownArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4rem;

  box-shadow: inset 0 0 4px #f7f5f2;
  border-radius: 3px;
`;

const NameLifeBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
`;

const ListIndexItem = ({ list, onDeletePressed }) => {
  const [isVisible, setIsVisible] = useState(false);

  const numberOfItems = list.products.length;
  const numberOfItemsChecked = list.products
    .map((item) => item.isChecked)
    .filter((item) => item === true).length;

  return (
    <div className="container">
      <div
        className="list-item-container"
        onClick={() => setIsVisible(!isVisible)}
      >
        <DropDownArrow>
          <IoMdArrowDropdown />
        </DropDownArrow>
        <NameLifeBar>
          <div className="list-title-delete">
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
        </NameLifeBar>
      </div>

      {isVisible && <ProductsIndex products={list} />}
    </div>
  );
};

export default ListIndexItem;
