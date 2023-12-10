import { useState } from "react";
import React from "react";

const MainFooter = ({ filterTodos, filteredTodos, clearAll}) => {
  const [selected, setSelected] = useState("");
  
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{filteredTodos.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={selected === "all" ? "selected" : ""}
            onClick={() => {
                filterTodos("all");
                setSelected("all");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selected === "active" ? "selected" : ""}
            onClick={() => {
                filterTodos("active");
                setSelected("active");
            }}
        
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selected === "completed" ? "selected" : ""} 
            onClick={() => {
                filterTodos("completed");
                setSelected("completed");
            }}

          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearAll}>
        Clear completed
      </button>
    </footer>
  );
};

export default MainFooter;