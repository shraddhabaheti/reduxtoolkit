import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import TodoItem from "../pages/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, removeTodo } from "../features/todoslice";


function Todo() {
    //const [data, setData] = useState({ text: '' });
    const [data,setData]=useState('');
    const count = useSelector((state) => state.todo.count);
    const todos = useSelector((state) => state.todo.todos);
    //const [editId, setEditId] = useState()
    const [editdata,setEditData] = useState('')
    const dispatch = useDispatch();
    const [toggleButton, setToggleButton] = useState(false)
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }
  
    const handleAddTodo = (e) => {
        e.preventDefault();
             
        if (editdata && data?.id)  {
            dispatch(editTodo(data?.text))
          }
        else {
            dispatch(addTodo(data?.text))
            setToggleButton(false)
        }
        setData({ text: '' })
    };

    const handleTodoDone = (id) => {
      dispatch(removeTodo(id));
      };
     
      return (
        <div className="App">
            <h1 className="h1">TODO List is define</h1>
            <form className="App-form" onSubmit={handleAddTodo}>
               

                <input type="text" name="text" value={editdata || data?.text} onChange={handleChange} />
                {
                    toggleButton ? <Fab size="small" color="secondary" aria-label="add" className="icon" type="submit" >
                        <EditIcon/></Fab> : <Fab size="small" color="secondary" aria-label="add" className="icon" type="submit" >
                        <AddIcon />   </Fab>
                }




            </form>
            <div className="Todos">
                {count > 0 &&
                    todos.map((todo) => (
                        <TodoItem
                            key={todo?.id}
                            text={todo?.text}
                            id={todo?.id}
                            onCheck={handleTodoDone}
                             setEditData={setEditData}
                            setToggleButton={setToggleButton}
                        />
                    ))}
                {count === 0 && <p></p>}

            </div>

        </div>
    );
}

export default Todo;