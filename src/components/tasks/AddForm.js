import React, { useState, useRef, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../../actions/todo";
import { addGoal } from "../../actions/goals";
import { formatNewTodo } from "../../utils/_DATA";
import { Box, Alert, Grid, Rating } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";
import { StyledAddBtn } from "../../styles/components/AddTodo.style";
import { setTaskFilter } from "../../actions/filters";
import Title from "../Title";

const labels = {
  1: "Super easy!",
  2: "Easy",
  3: "Medium",
  4: "Difficult",
  5: "Super difficult!",
};
const colorComplexity = {
  0: "#008002",
  1: "#008002",
  2: "#008002",
  3: "rgb(228, 165, 7)",
  4: "rgb(196, 0, 0)",
  5: "rgb(196, 0, 0)",
};

function getLabelText(value) {
  return `${value} Circle${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const AddForm = ({ userChoice }) => {
  const [color, setColor] = useState("#008002");
  const [value, setValue] = useState(1);
  const [hover, setHover] = useState(-1);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [successInfo, setSuccessInfo] = useState("");

  const inputAdd = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = formatNewTodo({ text, value });

    if (text !== "") {
      userChoice === "todos"
        ? dispatch(addTodo(todo))
        : dispatch(addGoal(todo));
      setText("");
      setValue(1);
      setHover(1);
      setColor(colorComplexity[value]);
      setSuccessInfo(`New item was added!`);
      dispatch(setTaskFilter("all"));
    } else {
      setError("Input is empty. Please add some text - title of your task.");
      setSuccessInfo("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    document.activeElement === inputAdd.current
      ? (setError(null), setSuccessInfo(""))
      : setError("");
  };

  return (
    <Grid
      container
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <form>
        {error ? <Alert severity="info">{error}</Alert> : null}
        {successInfo ? <Alert severity="success">{successInfo}</Alert> : null}
        <Title userChoice={userChoice} category="Title" />
        <input
          placeholder="Fill the input with your new task"
          type="text"
          ref={inputAdd}
          value={text}
          onChange={handleChange}
        />
      </form>
      <div>
        <Title userChoice={userChoice} category="Complexity" />
        <Rating
          name="complexity-level"
          value={value}
          precision={1}
          getLabelText={getLabelText}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
            setColor(colorComplexity[value]);
          }}
          onChange={(event, newValue) => {
            setValue(newValue);
            setColor(colorComplexity[value]);
          }}
          icon={
            <CircleIcon
              fontSize="inherit"
              style={{ color: hover !== -1 ? colorComplexity[hover] : color }}
            />
          }
          emptyIcon={
            <CircleIcon style={{ opacity: 0.55 }} fontSize="inherit" />
          }
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </div>

      <StyledAddBtn
        variant="contained"
        onClick={handleSubmit}
        startIcon={<AddIcon />}
      >
        Add
      </StyledAddBtn>
    </Grid>
  );
};

const mapStateToProps = ({ todos, goals, userChoice }) => {
  const dataList =
    userChoice === "todos"
      ? Object.keys(todos).map((t) => todos[t])
      : Object.keys(goals).map((g) => goals[g]);

  return { dataList, goals, userChoice };
};

export default connect(mapStateToProps)(AddForm);
