import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the dog', isCompleted: true},
        { description: 'Throw the dishes away', isCompleted: false},
        { description: 'Buy new dishes', isCompleted: false},
        { description: 'Pay phone bill', isCompleted: false}

      ]
    };
  }

  toggleComplete() {
    console.log('toggleComplete executed');
}
  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map((todo, index) =>
            <ToDo key={ index }  description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
