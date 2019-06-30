import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            visible: "all"
        };

        this._handleClickAddTodo = this._handleClickAddTodo.bind(this);
        this._handleClickButton = this._handleClickButton.bind(this);
        this._handleClickTodo = this._handleClickTodo.bind(this);
    }

    _handleClickAddTodo = (e) => {
        e.preventDefault()
        if (!e.target.text.value.trim()) {
            return;
        }
        this.state.todos.push({
            id: this.state.todos.length + 1,
            text: e.target.text.value,
            completed: false
        }); // まだ保存されていない
        // setStateを使ってstateを上書き
        this.setState({todos: this.state.todos}); // 保存完了
        // inputのvalueを空に
        e.target.text.value = '';
    }

    _handleClickButton = (e) => {
        e.preventDefault()
        this.state.visible = e.currentTarget.dataset.active;
        this.setState({
            visible: e.currentTarget.dataset.active
        })
    }

    _handleClickTodo = (e) => {
        this.state.todos[e.currentTarget.dataset.index].completed = true;
        this.setState({todos: this.state.todos}); // 保存完了
    }

    render() {
        return (
            <div>
                <AddTodo _handleClickAddTodo={this._handleClickAddTodo} />
                <TodoList _handleClickTodo={this._handleClickTodo} todos={this.state.todos} visible={this.state.visible} />
                <Footer _handleClickButton={this._handleClickButton} visible={this.state.visible} />
            </div>
        );
    }
}

export default App
