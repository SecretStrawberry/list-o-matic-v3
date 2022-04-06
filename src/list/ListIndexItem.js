import React from "react";

import "./ListIndexItem.scss";

import { AiFillCloseSquare } from "react-icons/ai";

const ListIndexItem = ({ list, onDeletePressed }) => {
  // console.log(name);
  return (
    <>
      <div className="list-item-container">
        <h3>{list.listName}</h3>
        <div
          className="delete-container"
          onClick={() => onDeletePressed(list.id)}
        >
          <AiFillCloseSquare className="delete-button" />
        </div>
      </div>
    </>
  );
};

export default ListIndexItem;
