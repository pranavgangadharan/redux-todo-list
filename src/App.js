import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import Axios from 'axios'

const Todos = () => {

  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  
  useEffect(()=>{
    Axios.get(`http://localhost:8080/api/tutorials`)
      .then(res => {
        const todoitem = res.data;
        setTodo(todoitem);
      })
  })

  const handleClick = id => {dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });
  Axios.delete(`http://localhost:8080/api/tutorials/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}
  if(!todo || !todo.length) {
    return <p>NO TODOS</p>
  }
  return (
    <ul>
      {todo.map(item=> <li onClick={() => handleClick(item.id)}>{item.label}</li>)}
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
} 
)
Axios.post(`http://localhost:8080/api/tutorials`, { label: newerTodo,
id: Math.ceil(Math.random()*100) })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}


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
