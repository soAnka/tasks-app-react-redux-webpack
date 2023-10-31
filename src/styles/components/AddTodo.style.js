import { styled } from "@mui/material/styles";
import { Button, Box, Rating } from "@mui/material";
import createIllustration from "../../assets/todo_app_illustration.png";

export const StyledAddBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  maxWidth: 200,
  padding: "0.75rem",
  margin: "1.5rem",
  borderRadius: "25px",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& svg": {
    color: theme.palette.common.white,
  },
  span: {
    color: theme.palette.common.white,
  },
  "> .add_item": {
    backgroundColor: "#1A2027",
  },
}));

export const StyledItemBg = styled(Box)(({ theme, className }) => ({
  backgroundImage: `url(${createIllustration})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  borderRadius: "0.15rem",
}));

export const StyledItem = styled(Box)(({ theme, className }) => ({
  backgroundColor: className === "dark" ? theme.palette.primary.main : "#fff",
  ...theme.typography.body2,
  borderRadius: "0.15rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "4px 4px 8px rgba(26, 37, 121, 0.2)",
  "&.dark h1": {
    color: "white",
    paddingLeft: "1.5rem",
  },
  p: {
    color: "white",
    fontWeight: 100,
  },
  hr: {
    borderColor: "rgba(255,255,255,0.3)",
  },
}));

export const StyledItemHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  fontSize: "14px",
  color: theme.palette.text.primary,
}));
