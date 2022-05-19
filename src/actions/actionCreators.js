import action from './actionTypes'

export const addTodo=(payload)=>({
    type:action._AddTodo,
    payload:payload
})

export const delTodo=(todo)=>({
    type:action._DelTodo,
    payload:todo
})

export const updTodo=(todo)=>({
    type:action._upTodo,
    payload:todo
})