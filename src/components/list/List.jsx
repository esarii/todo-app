import React from 'react'

function List({ todos, completeToDo, deleteToDo, filteredTodos }) {

    const handleIsActive = (id) => {
        completeToDo(id);
    }

    return (
        <ul className="todo-list">

            {filteredTodos.map((todo) => {
                return (
                    <li className={todo.isActive ? "" : "completed"} key={todo.id}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={!todo.isActive}
                                onChange={() => handleIsActive(todo.id)}
                                onClick={() => handleIsActive(todo.id)}
                            />
                            <label>{todo.title}</label>
                            <button
                                className="destroy"
                                onClick={() => (deleteToDo(todo.id))}
                            ></button>
                        </div>
                    </li>
                )
            }, [])};

            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn React</label>
                    <button className="destroy"></button>
                </div>
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Have a life!</label>
                    <button className="destroy"></button>
                </div>
            </li>
        </ul>
    )
}

export default List;