import React from 'react'
import './Course.css'
import webimg from '../image/web.jpeg'
import mathimg from '../image/math.jpg'
import scienceimg from '../image/science.avif'
import englishimg from '../image/english.jpg'
import geoimg from '../image/geo.jpeg'
import businessimg from '../image/business.jpg'
import graphicimg from '../image/graphic.jpg'
import uiuximg from '../image/uiux.jpg'
import animationimg from '../image/animation.png'
import mhimg from '../image/mH.jpg'
import fitnessimg from '../image/fitness.jpg'
import publicspeakingimg from '../image/publicSpeaking.JPG'
import frenchimg from '../image/speaking-french.jpg'

const Course = () => {
  return (
    <div>
      <div class="search-container">
    <input type="text" id="searchInput" onkeyup="filterCourses()" placeholder="Search for courses..."/>
  </div>

  <div class="category">
    <h2>Technology</h2>
    <div class="course-grid">
      <div class="course-card">
        <img src={webimg} alt="Web Development"/>
        <h3>Web Development</h3>
        <p>Master the fundamentals of front-end and back-end development using HTML, CSS, JavaScript, and modern frameworks like React and Node.js to build dynamic, responsive websites.</p>
      </div>
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Data Science"/>
        <h3>Data Science</h3>
        <p>Learn how to clean, analyze, and visualize data using Python, Pandas, and Matplotlib, while also diving into statistics, machine learning, and real-world data applications.</p>
      </div>
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" alt="Machine Learning"/>
        <h3>Machine Learning</h3>
        <p>Understand algorithms like regression, classification, clustering, and neural networks, and implement them using scikit-learn and TensorFlow for predictive modeling.</p>
      </div>
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80" alt="Cloud Computing"/>
        <h3>Cloud Computing</h3>
        <p>Explore cloud service models (IaaS, PaaS, SaaS), deploy applications to AWS and Azure, and gain expertise in cloud architecture and serverless computing.</p>
      </div>
    </div>
  </div>

  <div class="category">
    <h2>School Students</h2>
    <div class="course-grid">
      <div class="course-card">
        <img src={mathimg} alt="Mathematics"/>
        <h3>Mathematics</h3>
        <p>Develop a strong grasp of arithmetic, algebra, geometry, and calculus concepts through interactive lessons and practical problem solving activities.</p>
      </div>
      <div class="course-card">
        <img src={scienceimg} alt="Science"/>
        <h3>Science</h3>
        <p>Engage with exciting topics in physics, chemistry, and biology through hands-on experiments, real-world examples, and easy-to-understand explanations.</p>
      </div>
      <div class="course-card">
        <img src={englishimg} alt="English"/>
        <h3>English Grammar</h3>
        <p>Enhance reading comprehension, writing fluency, and grammar proficiency with structured lessons and fun storytelling exercises.</p>
      </div>
      <div class="course-card">
        <img src={geoimg} alt="Geography"/>
        <h3>Geography</h3>
        <p>Study the Earth's physical features, climates, and human-environment interactions to build global awareness and spatial thinking skills.</p>
      </div>
    </div>
  </div>

  {/* <!-- Categories --> */}
  <div class="category">
    <h2>Business & Entrepreneurship</h2>
    <div class="course-grid">
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72" alt="Startup Fundamentals"/>
        <h3>Startup Fundamentals</h3>
        <p>Learn the essential steps to launching your own startup, from ideation to execution. Perfect for aspiring entrepreneurs looking to solve real-world problems through innovation and business models.</p>
      </div>
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818" alt="Marketing Essentials"/>
        <h3>Marketing Essentials</h3>
        <p>Dive into marketing principles, branding, digital campaigns, and customer behavior to create compelling marketing strategies that grow your business or product reach.</p>
      </div>
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" alt="Finance for Beginners"/>
        <h3>Finance for Beginners</h3>
        <p>This course simplifies personal and business finance concepts, covering budgeting, investments, profit/loss, and how to make financially smart decisions as a business owner.</p>
      </div>
      <div class="course-card">
        <img src={businessimg} alt="Business Communication"/>
        <h3>Business Communication</h3>
        <p>Improve professional communication including presentation skills, email etiquette, business writing, and effective interpersonal communication within teams and companies.</p>
      </div>
    </div>
  </div>

  <div class="category">
    <h2>Creative Arts & Design</h2>
    <div class="course-grid">
      <div class="course-card">
        <img src={graphicimg} alt="Graphic Design"/>
        <h3>Graphic Design</h3>
        <p>Master visual storytelling with tools like Photoshop and Illustrator. This course covers design principles, color theory, typography, and layout techniques for real-world projects.</p>
      </div>
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1487014679447-9f8336841d58" alt="Photography Basics"/>
        <h3>Photography Basics</h3>
        <p>Capture stunning images by understanding composition, lighting, camera settings, and post-editing. Ideal for beginners looking to turn photography into a hobby or career.</p>
      </div>
      <div class="course-card">
        <img src={uiuximg} alt="UI/UX Design"/>
        <h3>UI/UX Design</h3>
        <p>Learn how to design engaging user interfaces and improve user experiences for apps and websites, using tools like Figma and principles like wireframing, prototyping, and feedback loops.</p>
      </div>
      <div class="course-card">
        <img src={animationimg} alt="Animation Fundamentals"/>
        <h3>Animation Fundamentals</h3>
        <p>This course introduces 2D and 3D animation techniques, frame-by-frame storytelling, and software tools to bring creativity to life in films, games, and advertisements.</p>
      </div>
    </div>
  </div>

  <div class="category">
    <h2>Health & Wellness</h2>
    <div class="course-grid">
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74" alt="Yoga for Beginners"/>
        <h3>Yoga for Beginners</h3>
        <p>Discover the art of balance and mindfulness with beginner-friendly yoga sessions focusing on posture, breathing techniques, flexibility, and overall wellness.</p>
      </div>
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15" alt="Nutrition Science"/>
        <h3>Nutrition Science</h3>
        <p>Understand the building blocks of nutrition, diet planning, reading food labels, and adopting sustainable eating habits to lead a healthier life.</p>
      </div>
      <div class="course-card">
        <img src={mhimg} alt="Mental Health Awareness"/>
        <h3>Mental Health Awareness</h3>
        <p>Gain insight into emotional wellbeing, stress management techniques, anxiety disorders, and supportive practices to promote mental resilience and balance.</p>
      </div>
      <div class="course-card">
        <img src={fitnessimg} alt="Fitness Training"/>
        <h3>Fitness Training</h3>
        <p>Enhance your physical fitness through structured workout routines, strength building exercises, cardio, flexibility improvement, and tracking fitness goals effectively.</p>
      </div>
    </div>
  </div>

  <div class="category">
    <h2>Language & Communication</h2>
    <div class="course-grid">
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42" alt="English Fluency"/>
        <h3>English Fluency</h3>
        <p>Enhance your spoken and written English through vocabulary expansion, pronunciation, grammar, and real-world conversation exercises suitable for all learners.</p>
      </div>
      <div class="course-card">
        <img src={publicspeakingimg} alt="Public Speaking Mastery"/>
        <h3>Public Speaking Mastery</h3>
        <p>Develop powerful presentation skills, stage presence, and audience engagement through speech preparation, vocal techniques, and confidence-building drills.</p>
      </div>
      <div class="course-card">
        <img src={frenchimg} alt="French for Beginners"/>
        <h3>French for Beginners</h3>
        <p>Start your journey in learning French with everyday vocabulary, basic grammar rules, and conversational dialogues to help you connect across cultures.</p>
      </div>
      <div class="course-card">
        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136" alt="Communication Skills"/>
        <h3>Communication Skills</h3>
        <p>Master the art of effective communication—verbal and non-verbal—including listening skills, conflict resolution, and clarity in both personal and professional settings.</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Course
