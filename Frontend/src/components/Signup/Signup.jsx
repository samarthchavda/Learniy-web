import React from 'react'
import './Signup.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate()
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [match, setmatch] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirmpassword)
        if (password == confirmpassword) {
            setmatch(false)
            fetch("http://localhost:8080/api/users/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, confirmpassword })
            })
                .then(rawData => rawData.json())
                .then(res => {
                    if (res.status) {
                        alert("succesfully signup now Login")
                        navigate("/login")
                    }
                })
        }
        else {
            setmatch(true)
        }
    }

    return (
        <div>
            <div class="form-box">
                <h2>Register</h2>
                <form id="signupForm" onSubmit={handlesubmit}>
                    <input type="text" name="name" placeholder="Full Name" value={name} onChange={(e) => setname(e.target.value)} required />
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} required />
                    {match && (
                        <p style={{ color: "red", marginTop: "0.5rem" }}>
                            Passwords do not match!
                        </p>
                    )}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
