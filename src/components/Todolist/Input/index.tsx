import React, { ReactElement, useRef } from "react";

import Button from "@mui/material/Button";

import { ITodo } from "../types";

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TdInput: React.FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim();

    if (val.length) {
      const isExist = todoList.find((todo: any) => todo.content === val);

      if (isExist) {
        alert("already exist");
        return;
      }

      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false,
      });

      inputRef.current!.value = "";
    }
  };

  return (
    <div className="todo-input">
      <input type="text" placeholder="please input" ref={inputRef} />
      <Button variant="contained" onClick={addItem}>
        增加
      </Button>
    </div>
  );
};

export default TdInput;
