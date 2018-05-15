import React from 'react';

const TodoItem = ({todo, updateStatus}) => (
    <li>
        {todo.status === 'in-progress' ? todo.description : null}&nbsp;&nbsp;
        <button onClick={() => updateStatus(todo.id)}>Completed Todo</button>
    </li>
)

export default TodoItem;