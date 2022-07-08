import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
function Home(){
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])
    return(
        <div>
            <h1 className="h1">Welcome To Home page</h1>
            <br/><br/>
            <Button className="btn" variant="danger" onClick={()=>{
                localStorage.removeItem('token')
                navigate('/login')
                }}>Logout</Button>
        </div>
    )
}
export default Home