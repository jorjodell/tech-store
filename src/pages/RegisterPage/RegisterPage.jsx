import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import Cookies from 'js-cookie'
import axios from 'axios';
import { toast } from 'react-toastify';
import css from './register-page.module.css';
import { saveUser } from '../../store/user';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if(Cookies.get('token')) {
    return <Navigate to="/" replace />
  }

  const onSubmit = async (formData) => {
    const { password2, ...body } = formData
    try {
      const { data } = await axios.post('http://localhost:3001/register', body)
      const { accessToken, user } = data;
      Cookies.set('token', accessToken);
      dispatch(saveUser(user))
      navigate('/', { replace: true });
    } catch(error) {
      toast.error(error.response.data)
    }
  }

  return (
    <div className={clsx('container', css.register)}>
      <h1>Create an account</h1>
      <section className={css.formWrapper}>
        <h2>New customer</h2>
        <p>Fill all fields to create an accout.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>Your name</p>
            <input type="text" {...register('name')} />
          </label>
          <label>
            <p>Email</p>
            <input type="email" {...register('email')} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" {...register('password')} />
          </label>
          <label>
            <p>Repeat password</p>
            <input type="password" {...register('password2')} />
          </label>
          <div className={css.actions}>
            <button className="btn">Sign Up</button>
            <Link to="/login" className="btn btn--ghost">Sign In</Link>
          </div>
        </form>
      </section>
    </div>
  )
}

export default RegisterPage;
