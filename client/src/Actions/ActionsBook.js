import * as actionTypes from "./ActionTypes";
import axios from "axios";

export const getBooks = () => dispatch => {
  axios
    .get("http://localhost:8000/list")
    .then(res => {
      dispatch({
        type: actionTypes.GET_BOOKS,
        payload: res.data
      });
    })
    .catch(error => console.log("oops"));
};

export const createBook = (Isbn, Title, Firstname, Lastname) => dispatch => {
  axios
    .post("http://localhost:8000/create", {
      Isbn,
      Title,
      Firstname,
      Lastname
    })
    .then(res => {
      dispatch(getBooks());
    })
    .catch(error => console.log("oops"));
};

export const updateBook = (
  _id,
  Isbn,
  Title,
  Firstname,
  Lastname
) => dispatch => {
  axios
    .put(`http://localhost:8000/edit/${_id}`, {
      Isbn,
      Title,
      Firstname,
      Lastname
    })
    .then(res => {
      dispatch(getBooks());
    })
    .catch(error => console.log("oops"));
};

export const deleteBook = _id => dispatch => {
  axios
    .delete(`http://localhost:8000/delete/${_id}`)
    .then(res => {
      dispatch(getBooks());
    })
    .catch(error => console.log("oops"));
};
