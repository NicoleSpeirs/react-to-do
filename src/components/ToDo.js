import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
        <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
        <button type="button" onClick={ this.props.handleDelete }>
          delete
        </button>
        </li>
    );
  }
}

export default ToDo;
