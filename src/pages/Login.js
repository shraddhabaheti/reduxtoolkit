import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginApi } from "../features/loginSlice"
import { Button } from "react-bootstrap"
export function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [state, setState] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState({
    username: '',
    password: ''
  })
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === "username") {
      if (value.length < 3) {
        setError({
          ...error,
          [name]: "please  enter 3 character "
        })
      } else {
        setError({
          ...error,
          [name]: ""
        })
      }

    }
    setState({
      ...state,
      [name]: value
    });
    if (name === "password") {
      var password_pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);
      if (!password_pattern.test(value))
        setError({
          ...error,
          [name]: "please enter strong password uppercase and lowercase number specialCharacter."
        })
      else {
        setError({
          ...error,
          [name]: ""
        })

      }
      setState({
        ...state,
        [name]: value
      })
    }
    setState({
      ...state,
      [name]: value
    })
  }
  const Submit = (e) => {
    e.preventDefault()
    if (!state.username || !state.password) {

      let error = {};

      if (!state.username) {
        error.username = "please enter the username"
        setError(error)
      }
      if (!state.password) {
        error.password = "please enter the password"
        setError(error)
      }
    }
    else {
      dispatch(loginApi(state))
      setTimeout(() => {
        navigate('/home')
      }, 2000)
    }
 }

  return (
    <div>
      <form className="form1">
        <h1 className="h1">Login form Design</h1>
        <label className="label1">username</label>
        <input type="text" className="input1" name="username" placeholder="userName" onChange={handleChange}></input>
        <span className="error1">{error.username}</span>
        <label className="label1">password</label>
        <input type="password" className="input1" name="password" placeholder="password" onChange={handleChange}></input>
        <span className="error1">{error.password}</span><br />
        <Button onClick={Submit} className="btn" variant="danger">Submit</Button>
      </form>
    </div>
  )
}