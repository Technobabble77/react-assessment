import React from 'react';

import './TodoList.css';

const todolist = props => {
  const checkboxClassName = props.checked ? 'todo-checkbox-text is-checked' : 'todo-checkbox-text';
  const delTitle = 'Delete ' + props.item;
  const doneTitle = 'Mark ' + props.item +' done';

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
