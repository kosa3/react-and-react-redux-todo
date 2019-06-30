import React from 'react'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <form onSubmit={this.props._handleClickAddTodo}>
            <input type="text" name="text" />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
    )
  }
}

export default AddTodo
