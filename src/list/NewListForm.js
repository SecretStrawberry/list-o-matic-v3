import React, { useState } from "react";
import { connect } from "react-redux";
import { createList } from "./actions";

import "./NewListForm.scss";

const NewListForm = ({ lists, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-list-form">
      <input
        className="new-list-input"
        type="text"
        placeholder="Add list"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          // check if listName exists in state list object
          const isDuplicate = lists.some(
            (list) => list.listName === inputValue
          );

          if (!isDuplicate) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-list-button"
      >
        Create List
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const mapDispatchtoProps = (dispatch) => ({
  onCreatePressed: (listTitle) => dispatch(createList(listTitle)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(NewListForm);
