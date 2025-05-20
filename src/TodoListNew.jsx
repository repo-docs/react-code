// src/TodoList.jsx
import { useState } from 'react'; // We'll need useState for the input and the list

// This component will display a single to-do item.
function TodoItem({ task, id }) {
    return <li>{task} (ID: {id})</li>;
}

function TodoListNew() {
    // State for the list of todos
    const [todos, setTodos] = useState([
        { id: 'a', text: 'Learn React basics' },
        { id: 'b', text: 'Practice with examples' },
        { id: 'c', text: 'Build a small project' }
    ]);

    // State for the new todo input field
    const [newTodoText, setNewTodoText] = useState(''); // Initially empty

    // Handler for input field changes
    const handleInputChange = (event) => {
        setNewTodoText(event.target.value); // Update state with current input value
    };

    // Handler for form submission
    const handleAddTodo = (event) => {
        event.preventDefault(); // Prevent default page reload

        if (newTodoText.trim() === '') {
            return; // Don't add empty todos
        }

        // Create a new todo object
        const newTodo = {
            // Simple ID generation (not suitable for production)
            id: Date.now().toString(), // Using timestamp as a pseudo-unique ID
            text: newTodoText
        };

        // Update the todos list by adding the new todo
        // We create a new array by spreading the existing todos and adding the new one
        setTodos([...todos, newTodo]);

        // Clear the input field after adding
        setNewTodoText('');
    };

    const todoListItems = todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} task={todo.text} />
    ));

    return (
        <div>
            <h2>My To-Do List - New</h2>

            {/* Form for adding new todos */}
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Add a new to-do"
                    value={newTodoText}      // Controlled input: value is tied to state
                    onChange={handleInputChange} // Update state on every change
                />
                <button type="submit">Add To-Do</button>
            </form>

            {todos.length > 0 ? (
                <ul>
                    {todoListItems}
                </ul>
            ) : (
                <p>No to-do items yet! Add some above.</p>
            )}
        </div>
    );
}

export default TodoListNew;