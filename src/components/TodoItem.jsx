import styles from "./todoitem.module.css"
export default function TodoItem({item ,todos , setTodos}){

   function handleDelete(id){
    setTodos(todos.filter((todo) => todo.id !== id))
   }

function handleClick(id) {
    const newArray = todos.map((todo) => 
    todo.id === id ? {...todo , done: !todo.done} : todo 
    )
    setTodos(newArray)
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
                <button 
                    onClick={() => handleDelete(item.id)}
                    className={styles.deleteButton}>
                    X
                </button>
            </div>
            <hr className={styles.line}/>
        </div>
    )
    
}
