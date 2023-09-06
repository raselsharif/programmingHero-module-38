

// export default function Todo({task, completed}){

//     return(
//         <h4>Task: {task}</h4>
//     )
// }


// export default function Todo({ task, completed }) {
//     if (completed) {
//         return (
//             <h4>Completed: {task}</h4>
//         )
//     }else{
//         return (
//             <h4>Running: {task}</h4>
//         )
//     }
// }


export default function Todo({ task, completed }) {
    if (completed) {
        return (
            <h4>Completed: {task}</h4>
        )
    }
    return (
        <h4>Running: {task}</h4>
    )

}