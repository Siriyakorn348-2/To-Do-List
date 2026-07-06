import { useState } from "react"
import styles from './form.module.css'

export default function Form({todos,setTodos}){
    //const [todo,setTodo] = useState("")
    const [todo,setTodo] = useState({name : "" , done :false})
    function handleSubmit(e){
        e.preventDefault();
        const taskName = todo.name.trim();

        if (!taskName) {
            return;
        }

        setTodos([...todos, { id: crypto.randomUUID(), name: taskName, done: false }]);
        setTodo({name : "" , done :false})
    }
    return (
        
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input className={styles.modernInput}
                    onChange={(e) => setTodo({name: e.target.value ,done:false })}
                    type="text"
                    value={todo.name}
                    placeholder="Enter todo item..."
                    />
                    <button  className={styles.modernButton} type="submit">Add</button>
                </div>
              
            </form>

        
    )
}
