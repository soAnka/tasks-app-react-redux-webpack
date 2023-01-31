import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 270;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)})`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} - 9px )`,
    },
  });

export const Drawer = styled(MuiDrawer)(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
        '& .MuiPaper-root': {
            transform: 'translate(0%, 5%)',
        },
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
        '& .MuiPaper-root': {
            transform: 'translate(0, 5%)',
        },

      }),
      'div.MuiPaper-root': {
        position: 'absolute',
        height: '90%',
        borderRadius: '50px',
        border: `1px solid ${theme.palette.primary.main}`,
        justifyContent: 'space-between',
        marginLeft: '1rem'
      },
      '.logo_box': {
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      },
      'ul': {
        marginTop: '2rem'
      },
      'div.MuiPaper-root > div': {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.75rem 1.2rem',
      },
      'div.MuiPaper-root > div > button' : {
        border: `1px solid ${theme.palette.primary.main}`
      },
      'div.MuiPaper-root > div > button:hover' : {
        backgroundColor: theme.palette.primary.main,
      },
      'div.MuiPaper-root > div > button:hover svg' : {
        color: 'white'
      },

      'ul li:first-of-type': {
        borderTop: `1px solid rgba(26, 37, 121, 0.2)`
      },
      'li': {
        borderBottom: `1px solid rgba(26, 37, 121, 0.2)`
      },
      'li a': {
        padding: '0.75rem 1.2rem'
      },
      'a:hover': {
        backgroundColor: 'rgba(26, 37, 121, 0.2)'
    },
      'a.active': {
        color: theme.palette.primary.main
      },
      'svg': {
        color: 'rgba(26, 37, 121, 0.5)'
      },
      'a.active svg': {
        color: theme.palette.primary.main
      }
    }),
  );