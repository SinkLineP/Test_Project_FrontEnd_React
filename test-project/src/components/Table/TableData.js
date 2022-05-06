import React, {Component} from "react";
import {Table} from "react-bootstrap";
import "./TableData.css";
import {connect} from "react-redux";
import {TemplateButton} from "../TemplateButton/TemplateButton";
import Pagination from "../Pagination/Pagination";


class TableData extends Component {

  render() {
    const postPerPage = 10;

    const lastPostIndex = this.props.currentPageTable.index * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = this.props.posts.slice(firstPostIndex, lastPostIndex);

    const paginate = (pageNumbers) => {
      this.props.onAddCurrentPageTable(pageNumbers);
    };

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
          {currentPosts.map((item, index) => {
            const {userId, id, title, body} = item;
            // console.log(checkPage)
            // if (userId === this.props.currentPageTable.index) {
              return (
                <>
                  <tr className={"full-content"}>
                    <td className={"id-format"}>{id}</td>
                    <td className={"title-format"}>{title}</td>
                    <td className={"content-format"}>{body}</td>
                  </tr>
                </>
              )
            // }


          })}

          </tbody>
        </Table>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={this.props.posts.length}
          paginate={paginate}
        />
        {/*<div>*/}
        {/*  <TemplateButton styleBtn={"link"} content={"Назад"} valueBtn={currentPage}/>*/}
        {/*  {[...Array(10)].map(() => {*/}
        {/*    currentPage += 1;*/}

        {/*    return (*/}
        {/*      <>*/}
        {/*        <TemplateButton*/}
        {/*          styleBtn={"link"}*/}
        {/*          content={currentPage}*/}
        {/*          valueBtn={currentPage}*/}
        {/*          func={(e) => this.props.onAddCurrentPageTable(Number(e.target.value))}*/}
        {/*        />*/}
        {/*      </>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*  <TemplateButton styleBtn={"link"} content={"Далее"} valueBtn={currentPage}/>*/}
        {/*</div>*/}
      </>
    );
  }



}

export default connect(
  state => ({
    posts: state.posts,
    currentPageTable: state.currentPageTable,
  }),
  dispatch => ({
    onAddRedux: (item) => {
      dispatch({type: 'ADD_TO_REDUX', data: item})
    },
    onAddCurrentPageTable: (item) => {
      dispatch({type: 'SAVE_CURRENT_PAGE', data: item})
    }
  })
)(TableData);