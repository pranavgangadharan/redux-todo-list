// import axios from 'axios'

const initialState = {
    todos: [],
};
// axios.get(`http://localhost:8080/api/tutorials`)
//       .then(res => {
//         const oldtodo = res.data;
//         initialState.todos.concat(oldtodo);
//       })



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state, todos: [...state.todos, action.payload],
            };
        case 'DELETE_TODO':
            return {
                ...state, todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
}

export default reducer;