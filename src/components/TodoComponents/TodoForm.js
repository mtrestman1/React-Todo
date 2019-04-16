import React from 'react';


const TodoForm = props => {
    return (
            <form>
            <input
            type="text"
            onChange={props.handleChanges}
            value={props.inputText}
            name="todo"
            placeholder="Enter task..."
            
          />
            <button onClick={props.addTodo}>Add Task</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
            </form>
          );
}

export default TodoForm;




