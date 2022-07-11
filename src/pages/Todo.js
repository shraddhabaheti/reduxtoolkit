import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


import TodoItem from "../pages/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, removeTodo } from "../features/todoslice";

function Todo() {
    const [data, setData] = useState({ text: '' });
    const count = useSelector((state) => state.todo.count);
    const todos = useSelector((state) => state.todo.todos);
    const [editdata, setEditData] = useState()
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }
    // const [ isEditing, setEditing ] = useState(false);
    const handleAddTodo = (e) => {
        e.preventDefault();
        if(editdata && todos?.id){
            // debugger            
            dispatch(editTodo(data?.id))
        }else{    
            // debugger        
            dispatch(addTodo(data?.text))
        }
        setData({ text: '' })
    };

    const handleTodoDone = (id) => {

        dispatch(removeTodo(id));

    };


    console.log('editData', editdata)
    return (
        <div className="App">
            <h1 className="h1">TODO List is define</h1>
            <form className="App-form" onSubmit={handleAddTodo}>
                <div className="textfield">

                </div>

                <input type="text" name="text" value={editdata?editdata: data?.text } onChange={handleChange} />
                <Fab size="small" color="secondary" aria-label="add" className="icon" type="submit" >
                    <AddIcon />
                </Fab>

            </form>
            <div className="Todos">
                {count > 0 &&
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            id={todo.id}
                            onCheck={handleTodoDone}
                            setEditData={setEditData}

                        />
                    ))}
                {count === 0 && <p></p>}

            </div>
        </div>
    );
}

export default Todo;