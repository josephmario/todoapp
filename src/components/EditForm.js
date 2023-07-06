import React, {useState} from "react";

export const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Update Task" onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type="submit"> Update Tasks </button>
        </form>
    )
}