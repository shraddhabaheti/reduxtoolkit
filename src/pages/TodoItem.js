import { SettingsSystemDaydreamTwoTone, Update } from "@mui/icons-material";
import { dialogActionsClasses } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import state from "sweetalert/typings/modules/state";
// import todoslice, { addTodo, editTodo } from "../features/todoslice";
import {editTodo} from "../features/todoslice"
const TodoItem = (props) => {
  let {id,text,setEditData} = props;
  const [data, setData] = useState("");  
    const dispatch=useDispatch()
   
    
    const deleteTodo = () => {
      props.onCheck(id);
    };
     const handleChange=(e)=>{
       const {name,value}=e.target
       setData({
         ...data,
         [name]:value
       })

     }
      // const editTodo =()=>{
      //   dispatch(editTodo(props?.id))
      //   // dispatch(editTodo(props.id))
         
      //  // dispatch(addTodo(data.id))
      //  // setData(e.target.value)
      // //console.log(props.id)


      // }
        // const index = state.findIndex(todo => todo.id === action.payload.id);
        // state[index] = {
          
        //   ...state[index],
        //   ...action.payload,
        // };
      //  setData(id,data)
      //  dispatch(editTodo(props.id))     
          
     
       
     //setData(props.text)    
    //  const edit = () =>{
    //   if(id === ''){
    //    setData({...data});
    //    return;
    //   }
    //   dispatch((editTodo({ id})));
    //   setEditing(false);
    //  }
   const editData=()=>{
      
     dispatch(editTodo(id))
     setEditData(text)
   }
   
    return ( 
      <div >
        <input type="checkbox" ></input>
        <label>{props.text}</label>
        <Button className="btn1" onClick={deleteTodo} variant="danger">Delete</Button>
        <Button className="btn1" onClick={editData} variant="danger"   name="edit" >Edit</Button>
      
      </div>
    );
  };
 
  export default TodoItem;