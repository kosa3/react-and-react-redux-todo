import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let todos;
    switch (this.props.visible) {
      case "active":
        todos = this.props.todos.filter((todo) => {
          return todo.completed === false;
        })
        break;
      case "completed":
        todos = this.props.todos.filter((todo) => {
          return todo.completed === true;
        })
        break;
      default:
        todos = this.props.todos
    }

    return (
        <ul>
          {todos.map((todo, index) =>
              <Todo
                  key={todo.id}
                  index={index}
                  {...todo}
                  _handleClickTodo={this.props._handleClickTodo}
              />
          )}
        </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default TodoList
