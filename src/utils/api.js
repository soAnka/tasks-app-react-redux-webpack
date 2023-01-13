import { getGoals, getTodos, getUserOption } from "./_DATA"

// export function getInitialData() {
//     return new Promise((res,rej)=>{
//     setTimeout(()=>res(getTodos()),1000)
//     }).then((todos)=>({
//         todos
//     }))
// }


export function getInitialData() {
    console.log("getInitialData")
    return Promise.all([
        getTodos(),
        getGoals(),
        getUserOption()
    ]).then(([todos, goals, userChoice])=>({
        todos,
        goals,
        userChoice
    }))
}

