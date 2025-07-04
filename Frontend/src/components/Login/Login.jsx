import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status) {
                alert("Login Successful!");
                localStorage.setItem("isLoggedIn", "true");
                setIsLoggedIn(true);
                navigate("/");
            } else {
                setError(data.message);
            }
        })
        .catch(err => {
            console.error(err);
            setError("Something went wrong. Try again.");
        });
    };

    return (
        <div>
            <div className="form-box">
                <h2>Login</h2>
                <form id="loginForm" onSubmit={handlesubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
