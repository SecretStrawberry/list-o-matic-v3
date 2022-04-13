import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { deleteList } from "./actions";

import NewListForm from "./NewListForm";
import ListIndexItem from "./ListIndexItem";
import { Information } from "./Information";

import "./ListsIndex.scss";

const Info = styled.div`
  /* position: relative; */
  align-self: flex-end;
  margin-right: 2rem;
  margin-top: 2rem;

  font-size: 2rem;
`;

const ListIndex = ({ lists = [], onDeletePressed, onShowPressed }) => {
  return (
    <>
      <div className="list-wrapper">
        <Info>
          <Information />
        </Info>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  onDeletePressed: (listTitle) => dispatch(deleteList(listTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
