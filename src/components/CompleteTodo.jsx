import React from "react";

export const CompleteTodo = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したToDo</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <li>
              <div className="list-roll">
                <p className="list-name">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
