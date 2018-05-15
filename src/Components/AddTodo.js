import React from 'react';

const AddTodo = ({ addItem, todo, updateTodo }) => (
    <div>
        <input type="text" onChange={updateTodo} value={todo} />&nbsp;
        <button onClick={addItem} disabled={!todo}>Add Todo</button>
    </div>
)

export default AddTodo;