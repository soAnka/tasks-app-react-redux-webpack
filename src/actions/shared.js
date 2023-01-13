import { getInitialData } from "../utils/api"
import { receiveGoals } from "./goals"
import { receiveTodos } from "./todo"


// export function handleInitialData() {
//     return (dispatch)=> {
//         return getInitialData()
//         .then(({todos})=>{
//             dispatch(receiveTodos(todos))
//         })
//     }
// }

export function handleInitialData() {
    console.log("handleInitialData")
    return (dispatch)=> {
        return getInitialData()
        .then(({todos, goals})=>{
            dispatch(receiveTodos(todos))
            dispatch(receiveGoals(goals))
        })
    }
}