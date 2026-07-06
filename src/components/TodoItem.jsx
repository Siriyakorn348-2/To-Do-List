import styles from "./todoitem.module.css"
import { FaPen } from "react-icons/fa6";

export default function TodoItem({item ,todos , setTodos,setTodoToEdit,todoToEdit}){

function handleDelete(id){
    setTodos(todos.filter((todo) => todo.id !== id))
    if (todoToEdit?.id === id) {
        setTodoToEdit(null);
    }
   }

function handleClick(id) {
    const newArray = todos.map((todo) => 
    todo.id === id ? {...todo , done: !todo.done} : todo 
    )
    setTodos(newArray)
}

function handleEdit(item) {
    setTodoToEdit(item);
}

  const className = item.done ? styles.completed : "";

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <button
                    type="button"
                    className={`${styles.circle} ${item.done ? styles.circleDone : ""}`}
                    onClick={() => handleClick(item.id)}
                    aria-label={item.done ? "Mark task as not done" : "Mark task as done"}
                />
                <span className={className} onClick={() => handleClick(item.id)}>{item.name}</span>
                <div className={styles.actions}>
                    <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className={styles.editButton}
                        aria-label="Edit task"
                    >
                        <FaPen />
                    </button>
                    <button 
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className={styles.deleteButton}
                        aria-label="Delete task"
                    >
                        X
                    </button>
                </div>
            </div>
            <hr className={styles.line}/>
        </div>
    )
    
}
