import { styled } from '@mui/material/styles';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';


export const StyledToggleBtn = styled(ToggleButton)(({ theme }) => ({
    '&.active': {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    },
}))

export const StyledToggleGroup = styled(ToggleButtonGroup)(() => ({
    '&.MuiToggleButtonGroup-root': {
        width: '98%',
        justifyContent: 'flex-end',
        borderRadius: '0.75rem',
        paddingTop: '2rem',
        '&.tasks_status_options': {
            justifyContent: 'flex-start'
        }
    },

    'button': {
        width: '10rem',
        fontSize: '0.75rem',
        lineHeight: '1.25rem',
        letterSpacing: '1.2px',
        color: 'black',
        '&:active': {
            backgroundColor:'black'
        }
    },
    'button:first-of-type': {
        borderRadius: '25px 0 0 25px'
    },
    'button:nth-of-type(2)': {
        borderRadius: '0 25px 25px 0'
    },
    'button:nth-of-type(3)': {
        borderRadius: '0 25px 25px 0'
    }
}))