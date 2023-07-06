import React, {useState} from "react";

export const Form = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What is your tasks today?" onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type="submit"> Add Tasks </button>
        </form>
    )
}