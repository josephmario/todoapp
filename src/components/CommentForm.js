import React, {useState} from "react";

export const CommentForm = ({commentTodo, task}) => {
    const [value, setValue] = useState(task.comment)
    const handleSubmit = e => {
        e.preventDefault();
        commentTodo(value, task.id);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Comment" onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type="submit"> Add Comment </button>
        </form>
    )
}