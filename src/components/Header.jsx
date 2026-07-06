
import styls from "./header.module.css"
import { FcTodoList } from "react-icons/fc";

export default function Header() {
  return (
    <div className={styls.header}>
      <FcTodoList />
      <span>My Todo List</span>
    </div>
  );
}