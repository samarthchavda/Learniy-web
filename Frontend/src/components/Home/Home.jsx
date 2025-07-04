import React from 'react'
import './Home.css'
import img1 from '../image/imgg1.png'
import img2 from '../image/imgg2.png'
import img3 from '../image/imgg3.png'
import s1 from '../image/s1.png'
import s2 from '../image/s2.png'
import s3 from '../image/s3.png'
import s4 from '../image/s4.png'

const Home = () => {
    return (
        <div>
            <section class="hero">
                <div class="hero-text">
                    <h1>Level Up Your Skills with Learnify</h1>
                    <p>Explore high-quality courses designed by industry experts to help you grow your career. It offers engaging lessons that help learners develop and hone their skills across a wide array of subject areas.</p>
                    <button class="explore-btn">Explore Courses</button>
                </div>
                <div class="hero-image">
                    <img src={img1} alt="Learning Image" />
                </div>
            </section>
            <section class="hero">
                <div class="hero-image">
                    <img src={img2} alt="Learning Image" />
                </div>
                <div class="hero-text">
                    <h1>Empowering Every Student.</h1>
                    <p>Dive into our vast library of dynamic online lessons, expertly crafted to enhance skills in
                        core subjects, world language. Explore our curated playlists designed to
                        sharpen specific skills, or unleash your creativity by building your own personalized playlists.</p>
                    <button class="explore-btn">Get Started</button>
                </div>

            </section>
            <section class="hero">

                <div class="hero-text">
                    <h1>Learning Has Never Been More Fun.</h1>
                    <p>At Learnify, we break down our curriculum into captivating, interactive lessons crafted to captivate students and foster skill development. Our engaging format ensures that students remain actively involved, enhancing their academic journey with meaningful participation.</p>
                    <button class="explore-btn">Learn More</button>
                </div>
                <div class="hero-image">
                    <img src={img3} alt="Learning Image" />
                </div>

            </section>
            <hr />



            <section class="tabs-section">
                <h2>Fun Learning Tools.<br />Amazing Results.</h2>

                {/* <!-- Tab Buttons --> */}
                <div class="tab-buttons">
                    <button class="tab-btn active" onclick="showTab('math')">Math</button>
                    <button class="tab-btn" onclick="showTab('ela')">ELA</button>
                    <button class="tab-btn" onclick="showTab('social')">Social Studies</button>
                    <button class="tab-btn" onclick="showTab('science')">Science</button>
                </div>

                {/* <!-- Tab Contents --> */}
                <div class="tab-content-container">
                    <div class="tab-content active" id="math">
                        <img src={s1} alt="Math" />
                        <div>
                            <h3>Math</h3>
                            <h2>Unlock the World of Numbers!</h2>
                            <p>Explore arithmetic to logarithmic functions with fun math courses that develop real-life skills.</p>
                        </div>
                    </div>
                    <div class="tab-content" id="ela">
                        <img src={s2} alt="ELA" />
                        <div>
                            <h3>ELA</h3>
                            <h2>Master the Power of Words</h2>
                            <p>Improve reading, writing, and grammar through engaging and interactive language activities.</p>
                        </div>
                    </div>
                    <div class="tab-content" id="social">
                        <img src={s3} alt="Social Studies" />
                        <div>
                            <h3>Social Studies</h3>
                            <h2>Understand the World Around You</h2>
                            <p>Learn about history, geography, and culture with courses that make learning relevant and exciting.</p>
                        </div>
                    </div>
                    <div class="tab-content" id="science">
                        <img src={s4} alt="Science" />
                        <div>
                            <h3>Science</h3>
                            <h2>Discover the World of Science</h2>
                            <p>Explore biology, chemistry, and physics through animated and experimental learning tools.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
