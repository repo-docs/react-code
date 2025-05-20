// src/UserGreeting.jsx
import { useState } from 'react';

function UserGreeting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // User is initially logged out

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    // --- Using if/else for rendering ---
    // let content;
    // if (isLoggedIn) {
    //   content = (
    //     <>
    //       <p>Welcome back, User!</p>
    //       <button onClick={handleLogout}>Logout</button>
    //     </>
    //   );
    // } else {
    //   content = (
    //     <>
    //       <p>Please log in.</p>
    //       <button onClick={handleLogin}>Login</button>
    //     </>
    //   );
    // }
    // return <div>{content}</div>;

    // --- Using ternary operator and logical && for more concise rendering ---
    return (
        <div>
            <h2>User Status</h2>
            {isLoggedIn ? (
                // If isLoggedIn is true
                <>
                    <p>Welcome back, User!</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                // If isLoggedIn is false
                <>
                    <p>Please log in.</p>
                    <button onClick={handleLogin}>Login</button>
                </>
            )}

            {/* Example of logical &&: Show this message only if logged in */}
            {isLoggedIn && <p>You have new notifications!</p>}
        </div>
    );
}

export default UserGreeting;