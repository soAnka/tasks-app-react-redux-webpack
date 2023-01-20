// import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { indigo, pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import createIllustration from '../../assets/todo_app_illistration@2x.png'


export const AddBtn = styled(Button)(({ theme }) => ({
    width: '100%',
    maxWidth: 200,
    padding: '0.75rem',
    margin: '1.5rem',
    borderRadius: '25px',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    '& svg': {
        color: theme.palette.common.white,
    },
    'span': {
        color: theme.palette.common.white,
    },
    '> .add_item': {
        backgroundColor: '#1A2027'
    }
  }));

  export const ItemBg = styled(Box)(({ theme, className }) => ({   
      backgroundImage: `url(${createIllustration})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '0.75rem',
  }));


  export const Item = styled(Box)(({ theme, className }) => ({   
    backgroundColor: className === 'dark' ?  theme.palette.primary.main : '#fff',
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    borderRadius: '0.75rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // '&.form_item': {
    //   backgroundColor: 'transparent',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // },
    '&.dark h1': {
        color: 'white',
        paddingLeft: '1.5rem'
    },
    'p': {
      color: 'white',
      fontWeight: 100
    },
    'hr': {
        borderColor: 'rgba(255,255,255,0.3)'
    },
    
  //  '& .bg_content': {
  //     backgroundImage: `url(${createIllustration})`,
  //     backgroundRepeat: 'no-repeat',
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     width: '100%',
  //     height: '100%',
  //     borderRadius: '0.75rem',
  //  }
  }));

  export const ItemHeader = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    fontSize: '18px',
    color: theme.palette.text.primary,

  }));
