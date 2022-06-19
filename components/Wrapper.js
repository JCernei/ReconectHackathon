import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import axios from 'axios'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@mui/styles'
import {
  Grid,
  Chip,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from '@mui/material'
import {
  Menu as MenuIcon,
} from '@mui/icons-material'

// import { useDispatch, useSelector } from 'react-redux'
import LeftMenu from '../components/LeftMenu';

const drawerWidth = 240;
const claimFallback = '/admin/dashboard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  notHiegherThanViewport: {
    maxHeight: '100vh'
  },
  notHiegherThanParent: {
    maxHeight: '100%',
  },
  appBar: {
    // backgroundColor: theme.palette.secondary.main,
    '& > *': {
      paddingLeft: '1rem'
    },
    zIndex: 990,
  },
  menuButton: {
    marginRight: 28,
  },
}), { name: 'MuiWrapperAdmin' });

const Wrapper = ({ children, claim = null, notHiegherThanViewport = false, onMenuOpenChange = () => {} }) => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter()
  // const dispatch = useDispatch()
  // const claims = useSelector(state => state.session.claims)
  // const user = useSelector(state => state.session.user)
  // const session = useSelector(state => state.session)
  // const rooms = useSelector(state => state.chat.rooms)
  const [open, setOpen] = useState(false)
  const [sessionExpired, setSessionExpired] = useState(false)
  const [stats, setStats] = useState({});

  const handleDrawerOpen = () => {
    onMenuOpenChange(!open);
    setOpen(!open);
  }

  return (
    <Box
      className={clsx(classes.root, notHiegherThanViewport ? classes.notHiegherThanViewport : '')}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          // height: 'calc(100% - 64px)',
        }}
      >
        <Box sx={{ height: '100%' }}>
          <LeftMenu open={open} />
        </Box>
        <Box
          sx={{
            maxHeight: '100%',
            flexDirection: 'column',
            display: 'flex',
            flexGrow: 1,
            // p: 3,
            // overflowY: 'scroll',
            paddingLeft: '16px',
            overflow: 'hidden',
            maxWidth: `calc(100% - ${open ? '240px' : '56px'})`,

          }}
        >
          {children}
        </Box>
      </Box>

    </Box>
  );
}

export default Wrapper
