// import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { indigo, pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import bg from '../../assets/login_illustration.jpg'
import greensLeft from '../../assets/greens_left.png'
import greens from '../../assets/greens.png'




export const StartBtn = styled(Button)(({ theme }) => ({
    width: '100%',
    maxWidth: 240,
    height: 90,
    // padding: '0.75rem',
    margin: '0.75rem',
    borderRadius: '3rem',
    transition: '0.45s',
    color: 'white',
    fontSize: '18px',
    '&.todos': {
        background: `linear-gradient(#2CA4DB, #1A257A)`,
    },
    '&.goals': {
        background: `linear-gradient(#8726BA, #1A257A)`,
    },
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.45s'
    },
    '& svg': {
        color: theme.palette.common.white,
    },
    'span': {
        color: theme.palette.common.white,
    },
  }));

  export const ContentBox = styled(Box)(() => ({  
    '&.start_box_description': {
        background: `url(${greensLeft})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'50% 100%',
        backgroundSize: '20%',
        minHeight: '50vh'
    },
    '&.start_box_buttons':{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
        position: 'relative',
    }
  }));