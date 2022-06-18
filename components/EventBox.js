import classes from '../styles/EventBox.module.css'
import Button from './Button';
import Input from './Input';

const EventBox = ({ onClose, event = {}, onEventChange = () => {}, onInputFocus = () => {}, focusedInput, onSubmit = () => {} }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          Create an event
        </div>
        <div className={classes.closeButton} onClick={e => onClose()}>
          &times;
        </div>
      </div>
      <div className={classes.form}>
        <Input
          label="Title"
          value={event.title}
          onChange={value => onEventChange({ ...event, title: value })}
        />
        <Input
          label="Start"
          value={event.start}
          onChange={value => onEventChange({ ...event, start: value })}
          onFocus={e => onInputFocus('start')}
          focused={focusedInput == 'start'}
        />
        <Input
          label="End"
          value={event.end}
          onChange={value => onEventChange({ ...event, end: value })}
          onFocus={e => onInputFocus('end')}
          focused={focusedInput == 'end'}
        />
        <div>
          <div style={{ marginBottom: '.5rem' }}>Type</div>
          <input type="radio" name="tip" value="0" onChange={e => onEventChange({ ...event, tip: e.target.value })} />
          <label for="html">Free</label><br />
          <input type="radio" name="tip" value="1" onChange={e => onEventChange({ ...event, tip: e.target.value })} />
          <label for="css">Free but lazy</label><br />
          <input type="radio" name="tip" value="2" onChange={e => onEventChange({ ...event, tip: e.target.value })} />
          <label for="javascript">Busy</label>
        </div>
      </div>
      <div className={classes.actionsContainer}>
        <Button
          light
          onClick={e => onSubmit()}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

export default EventBox;