import React from "react";
import { StyledItemHeader } from "../styles/components/AddTodo.style";

const Title = ({ userChoice, titleType, componentType, category }) => {
  return (
    <div>
      {titleType === "main" ? (
        <p>
          {userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1, 5))}{" "}
          {componentType}
        </p>
      ) : (
        <StyledItemHeader pt={2}>
          <strong>{category}</strong>
          <i>
            {" "}
            of your new{" "}
            {userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1, 4))}
          </i>
        </StyledItemHeader>
      )}
    </div>
  );
};

export default Title;
