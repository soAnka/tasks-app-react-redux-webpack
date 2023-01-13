// import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { indigo, pink } from '@mui/material/colors';
import Box from '@mui/material/Box';


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
        background: `url('../../assets/greens_left.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'70% 80%',
        backgroundSize: '25%',
    },
    '&.start_box_buttons':{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
        position: 'relative',
    
    }
  }));