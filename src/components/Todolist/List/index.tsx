import React, { ReactElement } from "react";
import { ITodo } from "../types";
import TdItem from "./Item";

interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TdList: React.FC<IProps> = ({
  todoList,
  toggleTodo,
  removeTodo,
}): ReactElement => {
  return (
    <div className="td-list">
      {todoList &&
        todoList.map((todo: ITodo) => {
          return (
            <TdItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
    </div>
  );
};

export default TdList;
