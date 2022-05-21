import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

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
    dispatch({
      type: "add_content",
      content: {
        todoContent,
      },
    });
  };

  const buttonHandler = () => {
    const input = document.getElementById('addTodo');
    input.value = "";
  }

  return (
    <form className="TodoAdd" onSubmit={submitHandler}>
      <input
        id="addTodo"
        type="text"
        name="todoadd"
        placeholder="Add Todo"
        autoComplete="off"
        onChange={inputHandler}
      />
      <button onClick={buttonHandler}>Add</button>
    </form>
  );
};

export default TodoAdd;
