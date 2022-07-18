import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Next() {
  return (
    <>
      
      <Navbar  className='color-nav' variant="dark">
        <Container>
         
          <Nav className="me-auto">
            <Link to='/'  className='link'  >Registration</Link>
            <Link to="/login" className='link'>Login</Link>
            <Link to="/home" className='link'>Home</Link>
            <Link to="/todos" className='link'>Todocurd</Link>
           
          </Nav>
        </Container>
      </Navbar>

      <br />
      </>
  );
}

export default Next;