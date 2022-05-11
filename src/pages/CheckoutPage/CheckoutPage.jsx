import clsx from 'clsx';
import { useForm } from 'react-hook-form'
import css from './checkout.module.css';

function CheckoutPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      address: '123',
      firstName: 'user',
      country: 'kz',
    }
  });

  const mySubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="container">
      <form className={css.form} onSubmit={handleSubmit(mySubmit)}>
        <label className={clsx(css.textField, css.required)}>
          <span>Email Address</span>
          <input type="text" {...register('address')} />
          <p>You can create an account after checkout.</p>
        </label>
        <hr className={css.divider} />
        <label className={css.textField}>
          <span>First Name</span>
          <input type="text"  {...register('firstName')} />
        </label>
        <label className={css.textField}>
          <span>First Name</span>
          <select {...register('country')}>
            <option value="kg">Кыргзыстан</option>
            <option value="kz">Казахстан</option>
          </select>
        </label>

        <button type="submit">Done</button>
      </form>
    </div>
  );
}
export default CheckoutPage;
