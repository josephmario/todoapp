import React, {useState} from "react";
import { Form } from "./Form";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import { EditForm } from "./EditForm";
import { CommentForm } from "./CommentForm";
import { LoginPage } from "./LoginPage"

uuidv4();

export const TodoMain = () => {
    const [todos, setTodos] = useState([])
    const [loginuser, setLogin] = useState(false)
    const addTodo = todo => {
        setTodos([...todos, 
            {id: uuidv4(), task: todo, isEditing: false, isComment: false, comment: ''}])
    }
    
    const deleteTodo = id => {
        const newPayload = todos.filter(todo => todo.id !== id)
        setTodos(newPayload)
    }
    const editTodo = id => {
        const newPayload = todos.map(todo => todo.id === id ? 
            {...todo, isEditing: !todo.isEditing} : todo);
        setTodos(newPayload)
    }
    const editTask = (task, id) => {
        const newPayload = todos.map(todo => todo.id === id ? 
            {...todo, task, isEditing: !todo.isEditing} : todo);
        setTodos(newPayload)
    }
    const commentTodo = id => {
        const newPayload = todos.map(todo => todo.id === id ? 
            {...todo, isComment: !todo.isComment} : todo);
        setTodos(newPayload)
    }
    const commentTask = (task, id) => {
        const newPayload = todos.map(todo => todo.id === id ? 
            {...todo, comment: task, isComment: !todo.isComment} : todo);
        setTodos(newPayload)
    }
    const loginTodo = (isLoggedIn) =>{
        setLogin(isLoggedIn)
    }
    const logoutTodo = () =>{
        setLogin(false)
    }
    return (
        <div>
            { loginuser ? <div>
                <span onClick={logoutTodo}>Logout</span>
                <Form addTodo={addTodo}/>
                <h1>Todo List</h1>
                {todos.map((todo, index) => (
                    todo.isEditing ? (<EditForm editTodo={editTask} task={todo}/>) : todo.isComment ? (<CommentForm commentTodo={commentTask} task={todo} />) : (<Todo 
                        task={todo} 
                        key={index} 
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        commentTodo={commentTodo}
                        />)
                ))
                
            }
        
        </div> : <LoginPage loginTodo={loginTodo}/>}
            
        </div>
        
    )
}