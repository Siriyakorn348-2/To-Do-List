import TodoItem from "./TodoItem"
import styles from "./todolist.module.css"
export default function TodoList({todos ,setTodos,setTodoToEdit,todoToEdit}){
    const sortedTodos = todos.slice().sort((a,b) => Number(a.done) - Number(b.done) )

    if (sortedTodos.length === 0) {
        return null;
    }

    return (
    <div className={styles.list}>
        {sortedTodos.map((item, index) => (
        <TodoItem key={item.id ?? index} item={item} todos={todos} setTodos={setTodos} setTodoToEdit={setTodoToEdit} todoToEdit={todoToEdit} />
    ))}

    </div>)
}
