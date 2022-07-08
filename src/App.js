import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login';
import { BrowserRouter, Route,  Router,  Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import Home from './pages/Home';
import Next from './pages/Next';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
        
       
      <BrowserRouter>
        <Next />
        <Routes>
         <Route path="/" element={<Registration/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/todo" element={<Todo/>}></Route>
       </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
