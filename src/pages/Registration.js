import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerApi } from "../features/registrationSlice"
import { useSelector } from "react-redux"
import { Button } from "react-bootstrap"
import { CircularProgress } from "@mui/material"

export function Registration() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [state, setState] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    first_name: '',
    last_name: '',
    loading: false

  })
  const [error, setError] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    first_name: '',
    last_name: '',
  })
  const myState = useSelector(state => state)
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
    if (name === "first_name") {
      if (value.length < 3) {
        setError({
          ...error,
          [name]: "please  enter first_name "
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
    if (name === "last_name") {
      if (value.length < 3) {
        setError({
          ...error,
          [name]: "please  enter last_name "
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


    if (name === "email") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(value)) {


        setError({
          ...error,
          [name]: "please enter the email address ."
        })
      }
      else {
        setError({
          ...error,
          [name]: ""
        })
      }
    }
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

    }
    if (name === "password2") {
      if (value.length < 3)
        setError({
          ...error,
          [name]: " password2 is required."
        })
      else {
        setError({
          ...error,
          [name]: ""
        })
      }

    }

    if (state.password && name === "password2") {

      if (state.password !== value) {
        setError({
          ...error,
          [name]: " password not a match...!"
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
    })

    setState({
      ...state,
      [name]: value
    })
  }
  const onSubmit = async(e) => {
    e.preventDefault()
    if (!state.last_name || !state.first_name || !state.username || !state.email || !state.password || state.password !== state.password2 || !state.password || !state.password2) {

      let error = {};
      if (state.password !== state.password2) {

        error.confirmpassword = "password and  password2 are not matched";

      }
      if (!state.username) {
        error.username = " Please enter the username"
        setError(error)
      }
      if (!state.first_name) {
        error.first_name = "please enter the first_name"
        setError(error)
      }
      if (!state.last_name) {
        error.last_name = "please enter the last_name"
        setError(error)
      }

      if (!state.email) {
        error.email = "please enter the email"
        setError(error)
      }
      if (!state.password) {
        error.password = "please enter the password"
        setError(error)
      }
      if (!state.password2) {
        error.password2 = "please enter the password2"
        setError(error)
      }


    }
    else {
      
      let res = await dispatch(registerApi(state))
      setState({
        loading: true
      })
      setTimeout(() => {
        setState({
          loading: false,
          

        })
      }, 2000)
     // navigate('/login')
    }
  }
  
  return (
    <div>
      <form className="form1">
        <h1 className="h1">Registration Form Design</h1>
        <label className="label1">username</label>
        <input type="text" className="input1" placeholder="username" name="username" onChange={handleChange}></input>
        <span className="error1">{error.username}</span>
        <label className="label1">password</label>
        <input type="password" className="input1" placeholder="password" name="password" onChange={handleChange}></input>
        <span className="error1">{error.password}</span>
        <label className="label1">password2</label>
        <input type="password" className="input1" placeholder="password2" name="password2" onChange={handleChange}></input>
        <span className="error1">{error.password2}</span>
        <label className="label1">email</label>
        <input type="email" className="input1" placeholder="email" name="email" onChange={handleChange}></input>
        <span className="error1">{error.email}</span>
        <label className="label1">first_name</label>
        <input type="text" className="input1" placeholder="first_name" name="first_name" onChange={handleChange}></input>
        <span className="error1">{error.first_name}</span>
        <label className="label1">last_name</label>
        <input type="text" className="input1" placeholder="last_name" name="last_name" onChange={handleChange}></input>
        <span className="error1">{error.last_name}</span>
        <br />
        <Button className="btn1" onClick= {onSubmit } type="submit" variant="danger">
          {state.loading ? <CircularProgress  /> : "Register"}
         </Button>
      
      </form>

    </div>
  )
}