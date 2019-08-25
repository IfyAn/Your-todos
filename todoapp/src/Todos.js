import React from 'react'

const Todos=({tiro, deleteTodo})=>{
    const todoList=tiro.length ? (
        tiro.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <p onClick={()=>{deleteTodo(todo.id)}}>Delete</p>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo left again</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos