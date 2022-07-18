import { SettingsSystemDaydreamTwoTone, Update } from "@mui/icons-material";
import { dialogActionsClasses } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import state from "sweetalert/typings/modules/state";
// import todoslice, { addTodo, editTodo } from "../features/todoslice";
import {editTodo} from "../features/todoslice"
const TodoItem = (props) => {
  let {text,setInput,setToggleButton} = props;
  //console.log(text)
  //const [data, setData] = useState("");  

   // const dispatch=useDispatch()
     const deleteTodo = () => {
      props.onCheck(props.id);
    };
  
     
   const editData=()=>{
    setInput({['text']:text, ['id']:props.id})
    
      setToggleButton(true)
     
   }
   
    return ( 
      <div >
        <input type="checkbox" ></input>
        <label>{props.text}</label>
        <Button className="btn1" onClick={deleteTodo} variant="danger">Delete</Button>
         <Button className="btn1" onClick={()=>editData(text)} variant="danger"   name="edit" >Edit</Button> 
        
      </div>
    );
  };
 
  export default TodoItem;