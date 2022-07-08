import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import todoslice, { editTodo } from "../features/todoslice";
const TodoItem = (props) => {
    const dispatch=useDispatch()
    
    const deleteTodo = () => {
      props.onCheck(props.id);
    };
    const edit=()=>{
   dispatch(editTodo(props.data))
    }
   
    return (
      <div >
        <input type="checkbox"></input>
        <label>{props.text}</label>
        <Button className="btn1" onClick={deleteTodo} variant="danger">Delete</Button>
        <Button className="btn1"  variant="danger" onClick={edit}>Edit</Button>
      
      </div>
    );
  };
 
  export default TodoItem;