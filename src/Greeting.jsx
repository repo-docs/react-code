// src/Greeting.jsx

// 1. The component function now accepts 'props' as an argument.
//    By convention, this argument is usually named 'props'.
function Greeting(props) {
    // 2. We can access the 'name' property from the props object.
    //    If no name is provided, we can set a default.
    const nameToDisplay = props.name ? props.name : "Guest";

    return (
        <p>Hello, {nameToDisplay}! Welcome to my React application.</p>
    );
}

// A more common way to access props is by destructuring:
/*
function Greeting({ name }) { // Destructure 'name' directly from props
  const nameToDisplay = name ? name : "Guest";
  return (
    <p>Hello, {nameToDisplay}! Welcome to my React application.</p>
  );
}
*/

// Or even provide a default value directly in destructuring:
/*
function Greeting({ name = "Guest" }) { // Set default for 'name'
  return (
    <p>Hello, {name}! Welcome to my React application.</p>
  );
}
*/

export default Greeting;