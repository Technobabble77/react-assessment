import React, { Component } from 'react';
import './App.css';

import TodoList from './TodoList/TodoList';

// const classNames = {
//   TODO_ITEM: 'todo-container',
//   TODO_CHECKBOX: 'todo-checkbox',
//   TODO_TEXT: 'todo-text',
//   TODO_DELETE: 'todo-delete',
// }

// const list = document.getElementById('todo-list')
// const itemCountSpan = document.getElementById('item-count')
// const uncheckedCountSpan = document.getElementById('unchecked-count')

// function newTodo() {
//   alert('New TODO button clicked!')
// }

class App extends Component {
  state = {
    todoItems: [],
    newItemText: '',
    itemCount: 0,
    uncheckedCount: 0,
    i: 0
  };

  newItemTextHandler = event => {
    this.setState({ newItemText: event.target.value });
  };

  newTodoHandler = event => {
    event.preventDefault();

    if (this.state.newItemText) {
      let newI = this.state.i;

      let newItemCount = this.state.itemCount;
      newItemCount++;
      let newUncheckedCount = this.state.uncheckedCount;
      newUncheckedCount++;

      const newTodoItem = {
        id: newI,
        item: this.state.newItemText,
        ischecked: false
      };

      const updatedTodoItems = [...this.state.todoItems, newTodoItem];

      newI++;

      return this.setState({
        todoItems: updatedTodoItems,
        newItemText: '',
        itemCount: newItemCount,
        uncheckedCount: newUncheckedCount,
        i: newI
      });
    } else {
      alert('Please enter a label for the new item.');
    }
  };

  checkedItemHandler = (event, itemIndex) => {
    const itemIsChecked = event.target.checked;

    let newUncheckedCount = this.state.uncheckedCount;
    if (itemIsChecked) {
      newUncheckedCount--;
    } else {
      newUncheckedCount++;
    }

    const checkedItemIndex = this.state.todoItems.findIndex(cii => {
      return cii.id === event.target.id*1;
    });
    
    const checkedItem = { ...this.state.todoItems[checkedItemIndex] };
    checkedItem.ischecked = itemIsChecked;

    const updatedTodoItems = [...this.state.todoItems];
    updatedTodoItems[checkedItemIndex] = checkedItem;

    this.setState({
      todoItems: updatedTodoItems,
      uncheckedCount: newUncheckedCount
    });
  };

  deleteItemHandler = itemIndex => {
    let delItemCount = this.state.itemCount;
    delItemCount--;

    let delUncheckedItemCount = this.state.uncheckedCount;

    const delItems = [...this.state.todoItems];

    if (!delItems[itemIndex].ischecked) {
      delUncheckedItemCount--;
    }

    delItems.splice(itemIndex, 1);
    this.setState({
      todoItems: delItems,
      itemCount: delItemCount,
      uncheckedCount: delUncheckedItemCount
    });
  };

  render() {
    let list = null;

    list = (
      <div>
        {this.state.todoItems.map((todoitem, index) => {
          return (
            <TodoList
              click={this.deleteItemHandler.bind(this, index)}
              check={event => this.checkedItemHandler(event, index)}
              checked={todoitem.ischecked}
              item={todoitem.item}
              id={todoitem.id}
              key={todoitem.id}
            />
          );
        })}
      </div>
    );

    return (
      <div className='container center'>
        <h1 className='center title'>My TODO App</h1>
        <div className='flow-right controls'>
          <span>Item count: <span id='item-count'>{this.state.itemCount}</span></span>
          <span>Unchecked count: <span id='unchecked-count'>{this.state.uncheckedCount}</span></span>
        </div>
        <div className='center'>
          <form onSubmit={this.newTodoHandler}>
            <input
              id='new-todo'
              type='text'
              placeholder='Enter a new item to do'
              onChange={this.newItemTextHandler}
              value={this.state.newItemText}
            />
            <button
              type='submit'
              className='button center'
              onClick={this.newTodoHandler}
            >New TODO</button>
          </form>
        </div>
        <div>
          <ul id='todo-list' className='todo-list'>
            {list}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
