import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TodoAdd = () => {
  const { dispatch } = useContext(TodoContext);

  
  const [newContent, setNewContent] = useState({
    todoContent: "",
  });

  const { todoContent } = newContent;

  const inputHandler = (e) => {
    setNewContent({ ...newContent, todoContent: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(!newContent.todoContent || /^\s*$/.test(newContent.todoContent)) {
      return;
    }
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
        label="Todo"
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
