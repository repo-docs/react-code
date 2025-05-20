// src/App.jsx
import './App.css';

// 1. Import the Greeting component
import Greeting from './Greeting'; // Make sure the path is correct

function App() {
    return (
        <>
            <h1>Hello, React World!</h1>
            {/* 2. Use the Greeting component like an HTML tag */}
            <Greeting />
            <Greeting /> {/* You can reuse components! */}
            <p>We are learning about components and composition.</p>
        </>
    );
}

export default App;