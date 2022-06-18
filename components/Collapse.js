import classes from '../styles/Collapse.module.css';
import clsx from 'clsx';

const Collapse = ({ children, open = false }) => {
  return (
    <div className={clsx(classes.root , open ? classes.open : classes.closed)}>
      {children}
    </div>
  )
}

export default Collapse