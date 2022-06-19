import classes from '../styles/Input.module.css';

const Input = ({ value, onChange, label, onFocus = () => {}, focused, autoFocus = false }) => {
  return (
    <div className={classes.root}>
      {label ? <div className={classes.label}>{label}{focused ? <span>&bull; choose on calendar</span> : ''}</div> : ''}
      <input
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        className={classes.input}
        onFocus={onFocus}
        autoFocus={autoFocus}
      />
    </div>
  )
}

export default Input
