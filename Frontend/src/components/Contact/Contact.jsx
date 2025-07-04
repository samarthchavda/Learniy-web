import React, { useState } from 'react'
import './Contact.css'
import contactimg from '../image/contact.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Navigate, useNavigate } from 'react-router-dom';


const Contact = () => {
    const navigate = useNavigate();
    const[name , setname] = useState()
    const [email, setemail] = useState()
    const [message,setmessage] = useState()

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(name,email,message)
        fetch("http://localhost:8080/api/users/contact", {
            method : "POST",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify({name,email,message})
        })
        .then(rawdata => rawdata.json())
        .then(res=>{
            if(res.status){
                alert("Thank you contact with us we give replay within 24 hours")
               navigate("/")
            }
        })

    }


    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-left">
                    <img src={contactimg} alt="Contact" className="contact-img" />
                    <a href="https://www.marwadiuniversity.ac.in/" target='_blank'>
                        <p className='contact-para'>Marwadi University, </p>
                        <p className='contact-para'>Morbi Road, </p>
                        <p className='contact-para'>Rajkot. </p>
                    </a>
                    <p className='contact-mail'><IoMdMail color='black' /> panipuri1895@gmail.com</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram size={30} color='black' /></a>
                        <a href="https://github.com/samarthchavda" target='_blank'><FaGithub size={30} color='black' /></a>
                        <a href="https://www.linkedin.com/in/samarth-chavda-0b938526a" target='_blank'><FaLinkedin size={30} color='black' /></a>
                    </div>
                </div>
                <div className="contact-right">
                    <form action="post" onSubmit={handlesubmit}>
                        <div className="contact-form">
                            <h2 className='contact-head'>Contact With Us</h2>
                            <input type="text"
                                placeholder="Enter Your Name"
                                className='contact-input'
                                value={name}
                                onChange={(e)=> setname(e.target.value)}
                                required />
                            <input type="email"
                                placeholder="Enter Your Email"
                                className='contact-input'
                                value={email}
                                onChange={(e)=> setemail(e.target.value)}
                                required />
                            <textarea
                                placeholder="Your Message"
                                className='contact-msg'
                                value={message}
                                onChange={(e)=> setmessage(e.target.value)}
                                required />
                            <button type="submit" className='contact-btn'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
