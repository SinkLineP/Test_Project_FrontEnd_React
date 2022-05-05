import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./TableData.css";
import { connect } from "react-redux";


class TableData extends Component {
  render() {
    return (
      <>
        <Table bordered>
          <thead className={"tbl-border"}>
          <tr className={"tbl-header"}>
            <th>ID</th>
            <th>Заголовок</th>
            <th>Описание</th>
          </tr>
          </thead>
          <tbody>
          {

          }
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts,
  }),
  dispatch => ({
    onAddRedux: (item) => {
      dispatch({ type: 'ADD_TO_REDUX', data: item })
    },
  })
)(TableData);