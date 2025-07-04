import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="footer-container">
                    <div className="footer-about">
                        <h3>About Learnify</h3>
                        <p>
                            Learnify is your gateway to online education. Discover a variety of courses, expert instructors,
                            and a flexible learning experience to boost your knowledge and career.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/course">Courses</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: support@learnify.com</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Address: Marwadi University, Rajkot, Gujarat</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Learnify. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
