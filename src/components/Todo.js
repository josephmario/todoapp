import React from "react";

export const Todo = ({task, deleteTodo, editTodo, commentTodo}) => {
    return (
        <div>
            <p>Todo: {task.task}</p>
            <p>Comment: {task.comment}</p>
                <div>
                    <span onClick={() => editTodo(task.id)}>EDIT</span> | <span onClick={() => deleteTodo(task.id)}>DELETE</span> | <span onClick={() => commentTodo(task.id)}>COMMENT</span>
                </div>
            
        </div>
    )
}