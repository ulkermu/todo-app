import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const TodoAdd = () => {
  const { content, setContent } = useContext(TodoContext);

  const [form, setForm] = useState([]);

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (content.text === "") {
      return false;
    }

    setContent([...content, form])
    //setForm(initialValue);
  };

  return (
    <form className="TodoAdd" onSubmit={submitHandler}>
      <input type="text" name="todoadd" placeholder="Add Todo" autoComplete="off" onChange={inputHandler} />
      <button>Add</button>
      <button>Remove</button>
    </form>
  );
};

export default TodoAdd;
