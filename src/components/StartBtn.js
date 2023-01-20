import React from "react";
import { StartBtn } from "../styles/components/TodoOrGoal";


const OptionBtn = ({ userOpt, choiceHandler }) => {

    const optionHandler = (userOption) => {
        choiceHandler(userOption)
    }

    return <StartBtn className={`${userOpt}`} onClick={() => optionHandler(userOpt)}>{userOpt}</StartBtn>
}

export default OptionBtn;