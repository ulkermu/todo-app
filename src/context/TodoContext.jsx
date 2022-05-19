import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [content, setContent] = useState([
    { id: 1, text: "Code exercise." },
    { id: 2, text: "Code review." },
    { id: 3, text: "Code reduct." },
    { id: 4, text: "Code edit." },
  ]);
  return <TodoContext.Provider value={{content, setContent}}>{props.children}</TodoContext.Provider>;
};

export default TodoContext;
