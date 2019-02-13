import React from 'react';


const TodoForm = props => {
    return (
            <form onSubmit={props.newTodo}>
            <input
            type="text"
            value={props.task}
            name="name"
            onChange={props.handleChanges}
            placeholder="Enter task..."
            
          />
            <button type="submit">Submit Task</button>
            <button type="submit">Clear Completed</button>
            </form>
          );
}

export default TodoForm;