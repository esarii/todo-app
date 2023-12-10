import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

function Header({ addToDo }) {

    const [newTodo, setNewTodo] = useState({ id: "", title: "", isActive: true });

    const uniqueId = uuidv4();

    const onChangeInput = (e) => {
        setNewTodo({
            id: uniqueId,
            title: e.target.value,
            isActive: true
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(newTodo);
        setNewTodo({
            title: "",
        });
    };

    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={onSubmit}>
                    <input
                        value={newTodo.title}
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus
                        onChange={onChangeInput}
                    />
                </form>
            </header>
        </div>
    )
}

export default Header;