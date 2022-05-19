import React from "react";
import { connect } from "react-redux";
import { addTodo, delTodo } from "../actions/actionCreators";
import { Card, TextField, Button, Paper } from "@mui/material";
import TodoList from "../List/Presentation";

function Presentation({ localStorage, _addTodo, _delTodo }) {
  const [value, setValue] = React.useState("");
  const data = localStorage.todo;
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    _addTodo(value);
    setValue("");
   
  };
  // const onDelete = () => {
  //   _delTodo(value);
  // };

  return (
    <Paper elevation={6}>
      <form onSubmit={submitHandler}>
        <div className="body">
          <Card className="paper">
            <h3
              style={{
                fontFamily: "cursive",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Todos
            </h3>
          </Card>
          <Card className="paper">
            <TextField
              variant="outlined"
              value={value}
              label="Add todo"
              onChange={changeHandler}
            />
            <Button variant="contained" color="success" type="submit">
              Add
            </Button>
          </Card>
        </div>
      </form>
      {data.map((data) => (
        <TodoList value={data.todo} id={data.id}  />
      ))}
    </Paper>
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
