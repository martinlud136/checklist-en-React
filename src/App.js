import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todos: todosData
    }
  }
  
  render(){
    
    const todosItems = this.state.todos.map(item=><TodoItem key={item.id} item={item} />)

    return (
  
      <div className='todo-list'>
          {todosItems}
      </div>
    );
  }
}

export default App;
