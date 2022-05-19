import React from "react";
import { Paper, Button, TextField } from "@mui/material";
import { connect } from "react-redux";
import { addTodo, delTodo } from "../actions/actionCreators";

function Presentation({ value, id, _delTodo }) {
  return (
    <div key={id} className="list">
      <h3 style={{ fontFamily: "cursive" }}>{value}</h3>
      <div>
        <Button
          color="error"
          variant="contained"
          onClick={() => _delTodo(value)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  localStorage: state,
});
// console.log(localStorage)
const mapDispatchToProps = {
  _addTodo: addTodo,
  _delTodo: delTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
