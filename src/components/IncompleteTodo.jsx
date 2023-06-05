import React from "react";

export const IncompleteTodo = (props) => {
  const { todo, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-roll">
                <p className="list-name">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
