import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import Button from '@mui/material/Button';

const TodoAdd = () => {
  const { dispatch } = useContext(TodoContext);

  
  const [newContent, setNewContent] = useState({
    todoContent: "",
  });

  const { todoContent } = newContent;

  const inputHandler = (e) => {
    setNewContent({ ...newContent, todoContent: e.target.value });
  };
  
  const input = document.getElementById("standard-basic");

  const submitHandler = (e) => {
    e.preventDefault();
    input.value = newContent;
    dispatch({
      type: "add_content",
      content: {
        todoContent,
      },
    });
    setNewContent({todoContent: ""});
  };

  return (
    <Box
      component="form"
      className="TodoAdd"
      onSubmit={submitHandler}
      noValidate
      autoComplete="off"
      sx={{
        "& > :not(style)": { m: 1, width: "inherit" },
      }}
    >
      <TextField
        fullWidth
        id="standard-basic"
        label="ToDo"
        variant="standard"
        type="text"
        name="todoadd"
        className="TodoAddInput"
        autoComplete="off"
        value={todoContent}
        onChange={inputHandler}
      />
      <button>
        Add
      </button>
    </Box>
  );
};

export default TodoAdd;
