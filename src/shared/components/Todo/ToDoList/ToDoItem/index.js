import { Avatar, Badge, Checkbox } from 'antd';
import React from 'react';
import labels from 'routes/inBuiltApps/Todo/data/labels';
import users from 'routes/inBuiltApps/Todo/data/users';

const ToDoItem = ({ todo, onTodoSelect, onTodoChecked, onMarkAsStart }) => {
  let user = null;
  if (todo.user > 0) user = users[todo.user - 1];
  return (
    <div className="kd-module-list-item">
      <div className="kd-module-list-icon">
        <Checkbox
          color="primary"
          checked={todo.selected}
          onClick={(event) => {
            event.stopPropagation();
            onTodoChecked(todo);
          }}
          value="SelectTodo"
          className="kd-icon-btn"
        />

        <div
          onClick={() => {
            todo.starred = !todo.starred;
            onMarkAsStart(todo);
          }}
        >
          {todo.starred ? (
            <i className="kd-icon-btn icon icon-star" />
          ) : (
            <i className="kd-icon-btn icon icon-star-o" />
          )}
        </div>
      </div>
      <div
        className="kd-module-list-info"
        onClick={() => {
          onTodoSelect(todo);
        }}
      >
        <div className="kd-module-todo-content">
          <div
            className={`kd-subject ${
              todo.completed && 'kd-text-muted kd-text-strikethrough'
            }`}
          >
            {todo.title}
          </div>
          <div className="kd-manage-margin">
            {labels.map((label, index) => {
              return (
                todo.labels.includes(label.id) && (
                  <Badge
                    key={index}
                    count={label.title}
                    style={{ backgroundColor: label.color }}
                  />
                )
              );
            })}
          </div>
        </div>
        <div className="kd-module-todo-right">
          {user === null ? (
            <Avatar>U</Avatar>
          ) : (
            <Avatar alt={user.name} src={user.thumb} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
