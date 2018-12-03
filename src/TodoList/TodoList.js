import React from 'react';

import './TodoList.css';

const todolist = props => {
  // Change className depending on checkbox click state of todo item
  const checkboxClassName = props.checked ? 'todo-checkbox-text is-checked' : 'todo-checkbox-text';

  // Customize hover title text for delete button and checkbox of each todo item
  const delTitle = 'Delete ' + props.item;
  const doneTitle = 'Mark ' + props.item +' done';

  // Use props in jsx to dynamically update the list item and its styling
  // Handle delete button click on each item
  // Handle checkbox check/uncheck on each item
  return (
    <div className='todo-card'>
      <div className='todo-delete-container'>
        <button onClick={props.click} className='todo-delete' title={delTitle}>X</button>
      </div>
      <div>
        <input type='checkbox' title={doneTitle} className='todo-checkbox' id={props.id} onChange={props.check} />
        <label title={doneTitle} htmlFor={props.id} className={checkboxClassName}>{props.item}</label>
      </div>
    </div>
  );
};

export default todolist;
