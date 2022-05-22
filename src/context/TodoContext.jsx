import { createContext, useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoContextProvider = (props) => {

  const reducer = (content, action) => {
    switch (action.type) {
      case "add_content":
        return [
          ...content,
          {
            id: uuidv4(),
            todoContent: action.content.todoContent,
          },
        ];

      case "remove_content":
        return content.filter((content) => content.id !== action.id);

      case "update_content":
        return content.map((content) =>
        content.id === action.id ? action.updatedContent : content
        );

      default:
        return content;
    }
  };

  const [content, dispatch] = useReducer(
    reducer,
    [],

    () => {
      const content = localStorage.getItem("content");
      return content ? JSON.parse(content) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content));
  });

  return (
    <TodoContext.Provider value={{ content, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  )
};

export default TodoContext;
