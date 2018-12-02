import React from 'react';

import './TodoList.css';

const todolist = props => {
  const checkboxClassName = props.checked ? 'todo-checkbox-text is-checked' : 'todo-checkbox-text';
  const delTitle = 'Delete ' + props.item;

  return (
    <div className='todo-card'>
      <div className='todo-delete-container'>
        <span onClick={props.click} className='todo-delete' title={delTitle}>X</span>
      </div>
      <div>
        <input type='checkbox' title='Mark done' className='todo-checkbox' id={props.id} onChange={props.check} />
        <label title='Mark done' htmlFor={props.id} className={checkboxClassName}>{props.item}</label>
      </div>
    </div>
  );
};

export default todolist;
