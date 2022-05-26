import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import Cookies from 'js-cookie'
import axios from 'axios';
import { toast } from 'react-toastify';
import { saveUser } from '../../store/user';
import css from './login-page.module.css';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if(Cookies.get('token')) {
    return <Navigate to="/" replace />
  }

  const onSubmit = async (body) => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', body)
      const { accessToken, user } = data;
      Cookies.set('token', accessToken);
      dispatch(saveUser(user));
      navigate('/', { replace: true });
      toast.success('Welcome');
    } catch(error) {
      toast.error(error.response.data)
    }
  }

  return (
    <div className={clsx('container', css.login)}>
      <h1>Customer Login</h1>
      <section className={css.formWrapper}>
        <h2>Registered Customers</h2>
        <p>If you have an account, sign in with your email address.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>Email</p>
            <input type="email" {...register('email')} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" {...register('password')} />
          </label>
          <div className={css.actions}>
            <button className="btn">Sign In</button>
            <Link to="/" className="btn btn--ghost">Forgot Your Password?</Link>
          </div>
        </form>
      </section>
    </div>
  )
}

export default LoginPage;
