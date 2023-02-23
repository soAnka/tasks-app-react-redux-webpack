import React from "react";
import { useDispatch } from "react-redux";
import { setUserChoice } from "../../actions/userChoice";
import { StartBtn } from "../../styles/components/TodoOrGoal";
import { StyledToggleBtn } from "../../styles/components/ToggleOptions";
// import { setUserChoice } from "../actions/userChoice";
// import { StartBtn } from "../styles/components/TodoOrGoal";
// import { StyledToggleBtn } from "../styles/components/ToggleOptions";

const OptionBtn = ({ menuType, value, className, methodToDispatch }) => {
  const dispatch = useDispatch();

  return menuType === "toggle" ? (
    <StyledToggleBtn
      className={className}
      value={value}
      onChange={(e) => dispatch(methodToDispatch(e.target.value))}
    >
      {value}
    </StyledToggleBtn>
  ) : (
    <StartBtn
      className={`${value}`}
      onClick={() => dispatch(setUserChoice(value))}
    >
      {value}
    </StartBtn>
  );
};

export default OptionBtn;
