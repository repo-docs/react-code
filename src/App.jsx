// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    // State for GET request (fetching a specific user)
    const [userData, setUserData] = useState(null);
    const [loadingGet, setLoadingGet] = useState(true); // Separate loading for GET
    const [errorGet, setErrorGet] = useState(null);     // Separate error for GET

    // State for POST request (creating a new user)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [postResponse, setPostResponse] = useState(null);
    const [loadingPost, setLoadingPost] = useState(false); // Separate loading for POST
    const [errorPost, setErrorPost] = useState(null);     // Separate error for POST

    // useEffect for GET request (fetching user with ID 2)
    useEffect(() => {
        const fetchUserData = async () => {
            setLoadingGet(true);
            try {
                const response = await fetch('http://localhost:8080/api/users/2');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setUserData(result);
            } catch (e) {
                setErrorGet(e.message);
            } finally {
                setLoadingGet(false);
            }
        };
        void fetchUserData();
    }, []);

    // Function to handle POST request
    const handleCreateUser = async (event) => {
        event.preventDefault(); // Prevent default form submission
        setLoadingPost(true);
        setErrorPost(null);
        setPostResponse(null);

        const newUser = { name, email };

        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            const result = await response.json(); // Try to parse JSON response

            if (!response.ok) {
                // If response is not OK, throw an error with the result which might contain error details
                throw new Error(result.message || `HTTP error! status: ${response.status}`);
            }

            setPostResponse(result);
            setName(''); // Clear form fields on successful post
            setEmail('');
            // Optionally, you could re-fetch the list of users or the specific user if needed
        } catch (e) {
            setErrorPost(e.message);
        } finally {
            setLoadingPost(false);
        }
    };

    return (
        <>
            <h1>User Management</h1>

            {/* Section for Creating a User (POST) */}
            <section>
                <h2>Create User</h2>
                <form onSubmit={handleCreateUser}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={loadingPost}>
                        {loadingPost ? 'Creating...' : 'Create User'}
                    </button>
                </form>
                {loadingPost && <p>Submitting user data...</p>}
                {errorPost && <p style={{ color: 'red' }}>Error creating user: {errorPost}</p>}
                {postResponse && (
                    <div style={{ color: 'green' }}>
                        <p>User created successfully!</p>
                        <pre>{JSON.stringify(postResponse, null, 2)}</pre>
                    </div>
                )}
            </section>

            <hr />

            {/* Section for Displaying Fetched User (GET) */}
            <section>
                <h2>Fetched User Details (ID: 2)</h2>
                {loadingGet && <p>Loading user data...</p>}
                {errorGet && <p style={{ color: 'red' }}>Error fetching user: {errorGet}</p>}
                {userData && !loadingGet && !errorGet ? (
                    <div>
                        <p><strong>ID:</strong> {userData.id !== undefined ? userData.id : 'N/A'}</p>
                        <p><strong>Name:</strong> {userData.name || 'N/A'}</p>
                        <p><strong>Email:</strong> {userData.email || 'N/A'}</p>
                    </div>
                ) : (
                    !loadingGet && !errorGet && <p>No user data to display for ID 2.</p>
                )}
            </section>
        </>
    );
}

export default App;