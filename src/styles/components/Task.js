import { styled } from '@mui/material/styles';
import { ListItem } from '@mui/material';

export const StyledListItem = styled(ListItem)(({ theme }) => ({
    '[datatest-id]=DeleteIcon': {
      color: theme.palette.secondary.main
    },
    '[datatest-id]=CheckBoxOutlineBlankIcon': {
      color: theme.palette.secondary.main
    },
  }))