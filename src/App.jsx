// src/App.jsx
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import UserGreeting from './UserGreeting';
import TodoList from "./TodoList.jsx";
import TodoListNew from "./TodoListNew.jsx"; // 1. Import UserGreeting

function App() {
    const userName = "Alice";

    return (
        <>
            <h1>Hello, React World!</h1>
            <Greeting name="Bob" />
            <Greeting name={userName} />
            <Greeting />
            <hr />
            <Counter />
            <hr />
            {/* 2. Use the UserGreeting component */}
            <UserGreeting />
            <hr />
            <p>We are learning about conditional rendering!</p>
            <hr />
            {/* 2. Use the TodoList component */}
            <TodoList />
            <hr />
            <p>We are learning about rendering lists!</p>
            <hr />
            <TodoListNew />
            <p>We are learning about forms and controlled components!</p>

        </>
    );
}

export default App;