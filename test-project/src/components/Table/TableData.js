import React, {Component} from "react";
import {Table} from "react-bootstrap";
import "./TableData.css";
import {connect} from "react-redux";
import {TemplateButton} from "../TemplateButton/TemplateButton";


class TableData extends Component {
  render() {
    let currentPage = 0;
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
          {this.props.posts.map((item) => {
            const {userId, id, title, body} = item;

            if (userId === 1) {
              return (
                <>
                  <tr className={id !== "" && title !== "" && body !== "" ? "full-content" : "empty-content"}>
                    <td className={"id-format"}>{id}</td>
                    <td className={"title-format"}>{title}</td>
                    <td className={"content-format"}>{body}</td>
                  </tr>
                </>
              )
            }


          })}

          </tbody>
        </Table>
        <div>
          <TemplateButton styleBtn={"link"} content={"Назад"}/>
          {[...Array(10)].map(() => {
            currentPage += 1;

            return (
              <>
                <TemplateButton styleBtn={"link"} content={currentPage} />
              </>
            )
          })}
          <TemplateButton styleBtn={"link"} content={"Далее"}/>
        </div>
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
      dispatch({type: 'ADD_TO_REDUX', data: item})
    },
  })
)(TableData);