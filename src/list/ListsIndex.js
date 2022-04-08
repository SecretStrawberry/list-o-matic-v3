import React from "react";
import { connect } from "react-redux";

import { deleteList } from "./actions";

import NewListForm from "./NewListForm";
import ListIndexItem from "./ListIndexItem";

import "./ListsIndex.scss";

const ListIndex = ({ lists = [], onDeletePressed, onShowPressed }) => {
  return (
    <div className="list-wrapper">
      <h1>List-o-Matic</h1>
      <NewListForm />

      {lists.map((list) => (
        <>
          <ListIndexItem
            list={list}
            onDeletePressed={onDeletePressed}
            onShowPressed={onShowPressed}
          />
        </>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  onDeletePressed: (listTitle) => dispatch(deleteList(listTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
