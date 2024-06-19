import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../Features/todoSlice";
import { useDispatch } from "react-redux";


function Todo(){

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch(); 

    return(
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <>
                <div key={todo.id} > {todo.text}</div>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Cross</button>
                </>
            ))}
        </>
    )
}

export default Todo;
