import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} delete={this.props.delete}/>)
  // updated method accounting for the uuid:
  renderTodos = () => this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} delete={this.props.delete}/>)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todo => dispatch({type: 'DELETE_TODO', payload: todo})
    // now this class has access to this.props.delete which can take in
    // an argument and send it as the actions payload.
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
