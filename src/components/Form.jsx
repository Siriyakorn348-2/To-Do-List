import { useEffect, useState } from "react"
import styles from './form.module.css'

export default function Form({todos,setTodos,todoToEdit,setTodoToEdit}){
    const [todo,setTodo] = useState({name : "" , done :false})

    useEffect(() => {
        if (todoToEdit) {
            setTodo({ name: todoToEdit.name, done: todoToEdit.done });
        } else {
            setTodo({ name: "", done: false });
        }
    }, [todoToEdit]);

    function handleSubmit(e){
        e.preventDefault();
        const taskName = todo.name.trim();

        if (!taskName) {
            return;
        }

        if (todoToEdit) {
            setTodos(
                todos.map((item) =>
                    item.id === todoToEdit.id
                        ? { ...item, name: taskName }
                        : item
                )
            );
            setTodoToEdit(null);
        } else {
            setTodos([...todos, { id: crypto.randomUUID(), name: taskName, done: false }]);
        }
        setTodo({name : "" , done :false})
    }
    return (
        
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input className={styles.modernInput}
                    onChange={(e) => setTodo({name: e.target.value ,done:false })}
                    type="text"
                    value={todo.name}
                    placeholder={todoToEdit ? "Edit todo item..." : "Enter todo item..."}
                    />
                    <button  className={styles.modernButton} type="submit">{todoToEdit ? "Update" : "Add"}</button>
                </div>
              
            </form>

        
    )
}
