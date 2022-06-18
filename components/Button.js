import clsx from 'clsx';
import classes from '../styles/Button.module.css';

const Button = ({ children, light = false, onClick = () => {} }) => {
  return (
    <div
      className={clsx(classes.root, light ? classes.light : classes.dark)}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button