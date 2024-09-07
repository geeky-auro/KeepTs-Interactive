import React, { useRef } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const text_ = useRef<HTMLDivElement>(null);

  // Function to delete a todo
  const onDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  // Function to edit a todo
  const onEdit = () => {
    const newTodoText = prompt("Edit todo", todo.todo); // Prompt user for new todo text
    if (newTodoText) {
      const updatedTodos = todos.map((t) =>
        t.id === todo.id ? { ...t, todo: newTodoText } : t
      );
      setTodos(updatedTodos);
    }
  };

  // Function to mark todo as done
  const onDone = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, isDone: !t.isDone } : t
    );
    setTodos(updatedTodos);

    // Toggle the crossed-line class to show strike-through
    if (text_.current) {
      text_.current.classList.toggle("crossed-line");
    }
  };

  return (
    <form className="todos__single">
      <span
        className={`todos__single--text ${todo.isDone ? "crossed-line" : ""}`}
        ref={text_}
      >
        {todo.todo}
      </span>
      <div>
        <span className="icon" onClick={onEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={onDelete}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={onDone}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
