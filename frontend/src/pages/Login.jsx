import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
   <div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={onSubmit}>
					<span className="login100-form-logo">
						<i className="zmdi zmdi-landscape"></i>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input  className="input100"  type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange} />
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn" type='submit'>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
      
 
    </>
  )
}

export default Login
