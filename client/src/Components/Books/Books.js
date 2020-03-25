import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { getBooks, deleteBook } from "../../Actions/ActionsBook";

export class Books extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    return (
      <div className="row m-2">
        {this.props.books &&
          this.props.books.map((e, i) => (
            <Card style={{ maxWidth: "300px" }} key={i} className="col-3 m-2">
              <CardBody>
                <CardTitle className="text-center font-weight-bold">
                  Book
                </CardTitle>
                <CardSubtitle className="m-1">ISBN:{e.Isbn}</CardSubtitle>
                <CardSubtitle className="m-1">Title:{e.Title}</CardSubtitle>
                <CardSubtitle className="m-1">
                  First Name:{e.FirstName}
                </CardSubtitle>
                <CardSubtitle className="m-1">
                  Last Name:{e.LastName}
                </CardSubtitle>
              </CardBody>
              <CardBody className="row">
                <div className="col m-1">
                  <Link to={{ pathname: `/edit/${e._id}` }}>
                    <Button className="col" outline color="warning">
                      Edit
                    </Button>
                  </Link>
                </div>
                <div className="col m-1">
                  <Button
                    className="col"
                    outline
                    color="danger"
                    onClick={() => this.props.deleteBook(e._id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        <div className="col-3 m-2 d-flex b align-items-center justify-content-center">
          <Link to={{ pathname: "/" }}>
            <Button>Back</Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { books: state.books };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(getBooks()),
    deleteBook: id => dispatch(deleteBook(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
