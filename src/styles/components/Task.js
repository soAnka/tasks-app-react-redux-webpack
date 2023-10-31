import { styled } from "@mui/material/styles";
import { List, ListItem, TableCell, TableRow } from "@mui/material";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: "2rem 1rem",
  borderTop: "1.5px solid #abb2d9",
  "[datatest-id]=DeleteIcon": {
    color: theme.palette.secondary.main,
  },
  "[datatest-id]=CheckBoxOutlineBlankIcon": {
    color: theme.palette.secondary.main,
  },
}));

export const StyledList = styled(List)(() => ({
  paddingTop: "1.5rem",
  width: "100%",
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&.MuiTableRow-root": {
    borderTop: "1.5px solid #abb2d9",
  },
}));

export const StyledTableCell = styled(TableCell)(() => ({
  "&.MuiTableCell-root": {
    padding: "2rem 1rem",
  },
}));
