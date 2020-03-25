import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Label, Input } from "reactstrap";
import { createBook, updateBook } from "../../Actions/ActionsBook";

class CreateBook extends Component {
  state = {
    Isbn: "",
    Title: "",
    FirstName: "",
    LastName: ""
  };
  changeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  componentDidMount() {
    // let book = this.props.books.filter(
    //   e => e._id === this.props.match.params.id
    // );
    // this.props.edit &&
    //   this.setState({
    //     Isbn: book[0].Isbn,
    //     Title: book[0].Title,
    //     FirstName: book[0].FirstName,
    //     LastName: book[0].LastName
    //   });
    this.props.edit
      ? this.setState({
          Isbn: this.props.books.Isbn,
          Title: this.props.books.Title,
          FirstName: this.props.books.FirstName,
          LastName: this.props.books.LastName
        })
      : this.setState({
          Isbn: "",
          Title: "",
          FirstName: "",
          LastName: ""
        });
    // console.log(this.props.books);
  }
  render() {
    return (
      <div className="w-50 m-auto">
        <h3>{this.props.edit ? "Edit Book" : "Add Book"}</h3>
        <Label for="Isbn">ISBN</Label>
        <Input
          type="text"
          name="Isbn"
          id="Isbn"
          placeholder="Enter the ISBN"
          defaultValue={this.state.Isbn}
          onChange={this.changeHandler}
        />

        <Label for="Title">Title Book</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Enter a Title Book"
          defaultValue={this.state.Title}
          onChange={this.changeHandler}
        />

        <Label for="Firstname">Author First Name</Label>
        <Input
          type="firstname"
          name="firstname"
          id="Firstname"
          placeholder="enter the First Name Author"
          defaultValue={this.state.FirstName}
          onChange={this.changeHandler}
        />

        <Label for="Lastname">Author Last Name</Label>
        <Input
          type="lastname"
          name="lastname"
          id="Lastname"
          placeholder="enter the Last Name Author"
          defaultValue={this.state.LastName}
          onChange={this.changeHandler}
        />

        <div className="text-right">
          <Link to={{ pathname: "/" }}>
            <Button className="col-2 m-1">Back</Button>
          </Link>
          <Link to={{ pathname: "/" }}>
            <Button
              className="col-2 m-1"
              color="primary"
              onClick={
                this.props.edit
                  ? () =>
                      this.props.updateBook(
                        this.props.match.params.id,
                        this.state.Isbn,
                        this.state.Title,
                        this.state.FirstName,
                        this.state.LastName
                      )
                  : () =>
                      this.props.createBook(
                        this.state.Isbn,
                        this.state.Title,
                        this.state.FirstName,
                        this.state.LastName
                      )
              }
            >
              {this.props.edit ? "Save" : "Add"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    books: state.books
  };
};

const MapDispatchToProps = dispatch => {
  return {
    createBook: (Isbn, Title, FirstName, LastName) =>
      dispatch(createBook(Isbn, Title, FirstName, LastName)),
    updateBook: (_id, Isbn, Title, FirstName, LastName) =>
      dispatch(updateBook(_id, Isbn, Title, FirstName, LastName))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(CreateBook);
