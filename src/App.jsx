// src/App.jsx

// This line imports the CSS file for this component.
// We'll keep it simple for now and you can explore styling later.
import './App.css';

// This is a functional component named 'App'.
// In React, component names should start with a capital letter.
function App() {
    // The component returns JSX, which describes what the UI should look like.
    return (
        // <> and </> are called Fragments. They let you group multiple elements
        // without adding an extra node to the DOM.
        <>
            <h1>Hello, React World!</h1>
            <p>This is my first React application.</p>
        </>
    );
}

// This line exports the App component so it can be used in other files (like main.jsx).
export default App;