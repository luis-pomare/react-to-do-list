import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type='checkbox'
          checked={this.props.todo.completed}
          onChange={() =>
            console.log(`${this.props.todo.id} ' has been clicked'`)
          }
        />
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
