import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
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
						Register Now
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type='text' id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

                    <div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type='email' id='email'
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
                    <div className="wrap-input100 validate-input" data-validate="Enter password">
						<input  className="input100"  type='password'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange} />
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn" type='submit'>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
    </>
  )
}

export default Register
