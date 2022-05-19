import action from '../actions/actionTypes'

const initialState={
    todo:[]
}

export default (state=initialState,{type,payload})=>{
    let newtodo;
    switch(type)
    {
        case action._AddTodo:
            newtodo=state.todo;
            newtodo.push({id:Math.floor(Math.random()*100),todo:payload})
            return {...state}

        case action._DelTodo:
            console.log(payload)
            newtodo=state.todo;
           newtodo=newtodo.filter(u=>u.todo!==payload)
            state.todo=newtodo;
            return {...state}
        case action._upTodo:
            console.log(payload)
            const updatedTodos=state.todo.map(i=>{
                if(i.id==payload.id)
                {
                    i.todo=payload.todo
                }
            })
            return {...state}
        default:
            return state    
    }
}