import React from 'react'
import './About.css'
import w1img from '../image/w1.avif'
import a1img from '../image/a1.avif'
import a2img from '../image/a2.avif'
import a3img from '../image/a33.png'
const About = () => {
    return (
        <div>
            <section class="about-us-section">
                <h1>Meet Our Team</h1>
                <p class="intro-text">
                    At Learnify, we believe in transforming education through creativity, collaboration, and cutting-edge technology. Our team is made up of passionate individuals committed to providing top-quality learning experiences to students of all levels. Meet the minds behind the magic!
                </p>

                <div class="team-container">
                    {/* <!-- Bansi Chavda --> */}
                    <div class="team-card">
                        <img src={w1img} alt="Bansi Chavda"/>
                            <h2>Bansi Chavda</h2>
                            <h4>Chief Creative Strategist</h4>
                            <p>
                                With a sharp eye for design and a mind full of innovative ideas, Bansi leads our creative vision and user experience strategy. She crafts the visual identity of Learnify, ensuring every interface feels inspiring and intuitive. Her deep passion for storytelling through design powers our platform’s aesthetic brilliance.
                            </p>
                    </div>

                    {/* <!-- Samarth Chavda --> */}
                    <div class="team-card">
                        <img src={a1img} alt="Samarth Chavda"/>
                            <h2>Samarth Chavda</h2>
                            <h4>Lead Backend Developer</h4>
                            <p>
                                A backend wizard, Samarth ensures that all the moving parts of our platform run seamlessly. From database design to server-side logic, he architected a powerful and scalable learning engine that supports thousands of learners every day. He’s the invisible force making Learnify stable and secure.
                            </p>
                    </div>

                    {/* <!-- Kirtan Kacha --> */}
                    <div class="team-card">
                        <img src={a2img} alt="Kirtan Kacha"/>
                            <h2>Kirtan Kacha</h2>
                            <h4>Product Innovation Head</h4>
                            <p>
                                Kirtan is the mind behind our most engaging course features and interactive modules. With his expertise in educational technology and UX testing, he constantly introduces new ideas that keep our learning experiences exciting, effective, and ahead of the curve.
                            </p>
                    </div>

                    {/* <!-- Pritam Dabasiya --> */}
                    <div class="team-card">
                        <img src={a3img} alt="Pritam Dabasiya"/>
                            <h2>Pritam Dabasiya</h2>
                            <h4>Community Manager & Outreach Lead</h4>
                            <p>
                                A natural communicator and empathetic leader, Pritam connects Learnify with educators, learners, and institutions. He builds partnerships, drives our social media presence, and ensures every learner feels supported. His mission is to build a thriving learning community.
                            </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
