// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//      activities: [
//       {
//       task: '',
//       id: '',
//       completed: false
//      }]
      
//     }
//   }

//   addTodo = task => {
//     task.preventDefault();
//    console.log(this.state)
    
//     const newTodo = {
//       task: this.state.task,
//       id: Date.now(),
//       completed: false,
      
//     };
//     this.setState({
//       activities: [...this.state.activities, newTodo],
      
     
//     });
//   };

class App extends React.Component {
  constructor() {
    super();
    this.state={
      tasks: [],
      inputText: ''
    };
  }

  addTask = e => {
    e.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ],
      inputText: ''
    });

  }

  handleChanges = e => {
      this.setState({
      inputText: e.target.value
    });
  };
  render() {
    return (
      <div>
        <h2>Todo List</h2>

    <TodoList 
    tasks ={this.state.tasks}
    />    

   <TodoForm 
   addTodo={this.addTask}
   inputText={this.inputText}
   handleChanges={this.handleChanges}
   />
   


        </div>
    );
  }
}

export default App;


// render() {
//   return (
//     <div>
//       <h2>Welcome to your Todo App!</h2>
//       <TodoList
//         tasks={this.state.tasks}
        
//       />
//       <TodoForm 
//         inputText={this.state.inputText}
//         handleChanges={this.handleChanges}
//         addTask={this.addTask}
        
//       />
//     </div>
//   );
// }
// }

// export default App;