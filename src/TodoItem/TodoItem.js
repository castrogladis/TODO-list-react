import "./TodoItem.css"
import { FaCheck } from "react-icons/fa";
import { MdOutlineAutoDelete } from "react-icons/md";


function TodoItem(props) {
  return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}><FaCheck /> </span>
        <p className={`TodoIten-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}</p>
        <span className="Icon Icon-delete" onClick={props.onDelete}><MdOutlineAutoDelete /></span>
      </li>
  )
}

export { TodoItem }