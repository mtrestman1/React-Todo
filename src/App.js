// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
     activities: [
      {
      task: '',
      id: '',
      completed: false
     }]
      
    }
  }

  addTodo = e => {
    e.preventDefault();
    
    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
      
    };
    this.setState({
      activities: [...this.state.activities, newTodo],
      task: '',
     
    });
  };

  handleChanges = e => {
      this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        
   <TodoForm />
   
{this.state.activities.map(activity => {
return <Todo 
activities={activity} 
/>
})}
        </div>
    );
  }
}

export default App;
