import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });
  if(!todos || !todos.length) {
    return <p>NO TODOS</p>
  }
  return (
    <ul>
      {todos.map(todo=> <li onClick={() => handleClick(todo.id)}>{todo.label}</li>)}
    </ul>
  )

}
const TodoInput = () => {
const dispatch = useDispatch();
const [newTodo, setNewTodo] = useState()
const handleChange = event => setNewTodo(event.target.value);
const handleClick = () => {
  const newerTodo = newTodo;
  setNewTodo('');
  dispatch({
  type : 'ADD_TODO',
  payload: {
    label: newerTodo,
    id: Math.ceil(Math.random()*100),
  }
})}


return (
  <>
  <input type="text" value={newTodo} onChange= {handleChange}/>
  <button onClick={handleClick}>ADD!!!</button>
  </>
)
};

function App() {
  return (
    <div className="App">
        <p>
          TODOS
        </p>
        <Todos/>
        <TodoInput/>
    </div>
  );
}

export default App;
