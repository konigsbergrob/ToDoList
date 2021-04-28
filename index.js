function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Call my family',
      isCompleted: false,
    },  
    {
      text: 'Read a chapter of nonfiction2',
      isCompleted: false,
    },
    {
      text: 'Finish my coding assignments',
      isCompleted: false,
    },
    {
      text: 'Exercise for 60 minutes',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

ReactDOM.render(
  <App/>,
  document.getElementById('root2')
);
