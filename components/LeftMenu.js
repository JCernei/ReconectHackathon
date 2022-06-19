import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  ExitToAppRounded as ExitToAppRoundedIcon,
  DashboardRounded as DashboardRoundedIcon,
  PeopleOutlineRounded as PeopleOutlineRoundedIcon,
  DirectionsCarRounded as DirectionsCarRoundedIcon,
  AssessmentRounded as AssessmentRoundedIcon,
  PersonRounded as PersonRoundedIcon,
  SettingsRounded as SettingsRoundedIcon,
  FilterList as FilterListIcon,
  StarHalfRounded as StarHalfRoundedIcon,
  LiveHelpRounded as LiveHelpRoundedIcon,
  GroupRounded as GroupRoundedIcon,
  ForumRounded as ForumRoundedIcon,
  StoreRounded as StoreRoundedIcon,
} from '@mui/icons-material';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import {setCurrentUser} from '../utils'
// import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
// import CustomLink from 'components/CustomLink';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: drawerWidth,
  },
  collapseEntered: {
    minWidth: 56,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
}), { name: 'MuiComponentAdminLeftMenu' })

export default function LeftMenu ({ open = false }) {
  const classes = useStyles();

  const handleSignOut = async () => {
    setCurrentUser({})
    window.location = '/'
  }

  return (
    <Collapse
      orientation="horizontal"
      in={open}
      classes={{
        entered: classes.collapseEntered,
      }}
      sx={{
        height: '100%',
        borderRight: '1px solid #00000020',
        "&": {
          transitionDuration: '400ms',
          '&:hover': {
            width: `${drawerWidth}px!important`,
          },
        }
      }}
      collapsedSize={56}
    >
      <div className={classes.root}>
        <List>

          <Link href="/calendar">
            <ListItem button>
              <ListItemIcon>
                <EventNoteRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItem>
          </Link>

          <Link href="/friends">
            <ListItem button>
              <ListItemIcon>
                <GroupRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItem>
          </Link>

        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleSignOut}>
            <ListItemIcon>
              <ExitToAppRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    </Collapse>
  )
}
