import React from "react";
import { connect } from "react-redux";
import { StyledToggleGroup } from "../../styles/components/ToggleOptions";
import OptionBtn from "./OptionBtn";

const OptionsMenu = ({
  menuType,
  activeChoice,
  options,
  className,
  methodToDispatch,
}) => {
  return menuType === "toggle" ? (
    <StyledToggleGroup className={className} value={activeChoice}>
      {options.map((opt) => (
        <OptionBtn
          methodToDispatch={methodToDispatch}
          className={activeChoice === opt ? "active" : null}
          key={opt}
          menuType={menuType}
          value={opt}
        >
          {opt}
        </OptionBtn>
      ))}
    </StyledToggleGroup>
  ) : (
    options.map((opt) => (
      <OptionBtn key={opt} value={opt} menuType={menuType}></OptionBtn>
    ))
  );
};

const mapStateToProps = ({ userChoice }) => {
  return { userChoice };
};

export default connect(mapStateToProps)(OptionsMenu);
