import { useState, useEffect } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import MainFooter from './main/MainFooter';

function TodoLayout() {

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addToDo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]);
  };

  const completeToDo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  }

  const deleteToDo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  }

  const filterTodos = (filter) => {
    let filteredTodos;
  
    switch (filter) {
      case "all":
        filteredTodos = todos;
        break;
      case "active":
        filteredTodos = todos.filter((todo) => todo.isActive);
        break;
      case "completed":
        filteredTodos = todos.filter((todo) => !todo.isActive);
        break;
      default:
        filteredTodos = todos;
    }
  
    setFilteredTodos(filteredTodos);
  };

  const clearAll = () => {
    setTodos([]);
    setFilteredTodos([]);
  }

  useEffect(() => {
    console.log(todos);
    console.log(filteredTodos);
  }, [todos, filteredTodos]);


  return (
    <div>
      <>
        <section className="todoapp">
          <Header addToDo={addToDo} />
          <Main 
          todos={todos} 
          completeToDo={completeToDo} 
          deleteToDo={deleteToDo}
          filteredTodos={filteredTodos}/>
          <MainFooter 
          filterTodos={filterTodos} 
          filteredTodos={filteredTodos}
          clearAll={clearAll}/>
        </section>
        <Footer />
      </>

    </div>
  )
}

export default TodoLayout;