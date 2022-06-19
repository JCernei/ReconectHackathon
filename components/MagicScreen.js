import { CircularProgress, Typography } from '@mui/material';
import clsx from 'clsx';
import classes from '../styles/MagicScreen.module.css';
import Button from './Button';

const MagicScreen = ({ event = {}, open = false, loading = false, onClose = () => {} }) => {
  return (
    <div className={clsx(classes.root, open ? classes.open : classes.closed)}>
      {loading ? (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <CircularProgress style={{ color: '#8a90d6', marginBottom: '5rem' }} />
          <Button onClick={e => onClose()}>
            Cancel
          </Button>
        </div>
      ) : (
        <div className={classes.content}>
          <Typography variant="h2" gutterBottom>Yay!</Typography>
          <Typography variant="body1">We found an event for you and your friends!</Typography>
          <div className={classes.details}>
            <div>
              <span className={classes.text1}>Start at:</span>
              <span className={classes.text2}>{event.start}</span>
            </div>
            <div>
              <span className={classes.text1}>Ends at:</span>
              <span className={classes.text2}>{event.end}</span>
            </div>
            <div>
              <span className={classes.text1}>Friends:</span>
              {/* <span className={classes.text2}> */}
                {event.fn?.map((user, index) => <span className={classes.userContainer}><span className={classes.user}>{user}</span>{index < event.fn.length - 1 ? ',' : ''}</span>)}
              {/* </span> */}
            </div>
          </div>
          <Button onClick={e => onClose()}>Thanks!</Button>
        </div>
      )}
    </div>
  )
}

export default MagicScreen