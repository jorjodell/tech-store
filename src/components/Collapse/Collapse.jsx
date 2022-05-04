import { useState } from 'react';
import css from './collapse.module.css';

const Collapse = ({ title, isOpen = false, children }) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className={css.collapse}>
      <div className={css.header}>
        <p>{title}</p>
        <button onClick={() => setOpen(!open)}>^</button>
      </div>
      {open && <div className={css.content}>{children}</div>}
    </div>
  );
};

export default Collapse;
