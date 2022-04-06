import React from "react";

import "./ListIndexItem.scss";

const ListIndexItem = ({ list, onDeletePressed }) => {
  // console.log(name);
  return (
    <>
      <div className="list-item-container">
        <h3>{list.listName}</h3>
        <button
          onClick={() => onDeletePressed(list.id)}
          className="delete-button"
        >
          Delete List
        </button>
      </div>
    </>
  );
};

export default ListIndexItem;
