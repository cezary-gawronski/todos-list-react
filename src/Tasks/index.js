import React from "react";
import "./style.css"

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        className={`tasks__item
        ${task.done && hideDone
            ? " tasks__item--hiden"
            : ""}`}
      >
        <button className="tasks__button tasks__button--toggleDone">
          {task.done ? "✔" : ""}
        </button>
        <span className="tasks__contentContainer">
          <span className={
            `tasks__content ${task.done
              ? " tasks__content--done"
              : ""} `}
          >
            {task.content}
          </span>
        </span>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => console.log("Usuwam zadanie")}>
        </button>
      </li>
    ))}
  </ul >
);

export default Tasks;