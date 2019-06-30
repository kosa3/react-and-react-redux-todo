import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li
                onClick={this.props._handleClickTodo}
                data-index={this.props.index}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                {this.props.text}
            </li>
        );
    }
}


Todo.propTypes = {
  _handleClickTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
