import CustomScrollbars from '@kongd/components/CustomScrollbars';
import React from 'react';

import ToDoItem from './ToDoItem';

const ToDoList = ({ toDos, onTodoSelect, onTodoChecked, onMarkAsStart }) => {
  return (
    <div className="kd-module-list">
      <CustomScrollbars className="kd-module-content-scroll">
        {toDos.map((todo, index) => (
          <ToDoItem
            key={index}
            index={index}
            todo={todo}
            onTodoSelect={onTodoSelect}
            onMarkAsStart={onMarkAsStart}
            onTodoChecked={onTodoChecked}
          />
        ))}
      </CustomScrollbars>
    </div>
  );
};

export default ToDoList;
