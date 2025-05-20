// src/TodoList.jsx

// This component will display a single to-do item.
// We can make it a separate component for better organization.
function TodoItem({ task, id }) {
    return <li>{task} (ID: {id})</li>;
}

function TodoList() {
    // Let's imagine this data comes from props or state in a real app
    const todos = [
        { id: 'a', text: 'Learn React basics' },
        { id: 'b', text: 'Practice with examples' },
        { id: 'c', text: 'Build a small project' },
        { id: 'd', text: 'Explore more advanced topics' }
    ];

    // Using map() to transform the 'todos' array into an array of <li> elements
    const todoListItems = todos.map(todo => (
        // 1. Each list item needs a unique 'key' prop.
        //    Here, we use 'todo.id' as the key.
        <TodoItem key={todo.id} id={todo.id} task={todo.text} />
        // If TodoItem wasn't a separate component, it would look like:
        // <li key={todo.id}>{todo.text}</li>
    ));

    return (
        <div>
            <h2>My To-Do List</h2>
            {todos.length > 0 ? (
                <ul>
                    {todoListItems}
                </ul>
            ) : (
                <p>No to-do items yet!</p>
            )}
        </div>
    );
}

export default TodoList;