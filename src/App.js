import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import TodosData from './components/todosData'

function App() {

  const todosItems = TodosData.map(item=><TodoItem key={item.id} item={item} />)

  return (

    <div className='todo-list'>
        {todosItems}
    </div>
  );
}

export default App;
