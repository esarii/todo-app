import React from 'react'
import List from '../list/List';

function Main({todos, completeToDo, deleteToDo, filteredTodos}) {
    
    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <List
                todos={todos} 
                completeToDo={completeToDo}
                deleteToDo={deleteToDo}
                filteredTodos={filteredTodos}/>
            </section>
        </div>
    )
}

export default Main;