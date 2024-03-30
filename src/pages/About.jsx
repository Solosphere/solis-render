import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faMedium, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const AboutPage = () => {
const tattooImages = ["tat-1.jpg", "tat-2.jpg", "tat-3.jpg", "tat-4.jpg", "tat-5.jpg"]
const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        window.scrollTo(0, 0);

        // Simulate a delay for loading
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(delay);
      }, []); 


  return (

    
    <div className="about-container">
      
      <header className="about-header">
        <h1>ABOUT SOLISPHERE</h1>
        <section className="about-caption">
        <p>Beyond a gallery, it's a curated digital sanctuary merging art and technology, illuminating the path to personal wholeness and growth.</p>
        </section>
      </header>

      <section className="about-row-1">
        <section className="introduction">
        <h2>THE CREATIVE</h2>
        <img src="/images/portrait.JPG" alt="desc"/>
        <p>Hey, I'm Daniel Nelson, the creator behind SOLISPHERE. My journey began at Parsons School of Art & Design, where I honed skills in art, graphic design, and creative technology. Seeking further growth, I became experienced in full-stack software engineering at The Marcy Lab School's Software Engineering Fellowship. SOLISPHERE, born from this diverse background, is a platform I've crafted to showcase my multifaceted portfolio, delving into the intricacies of the human condition. As an artist, graphic designer, and software engineer, I leverage my varied expertise to offer insights and create pathways for navigating the complexities of morality, existence, and the pursuit of personal wholeness.
        </p>
        </section>
        <section className="philosophy-inspiration-container">
            <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <section className="artistic-philosophy">
        <h2>THE PHILOSOPHY</h2>
        <p>
        Within SOLISPHERE, I aim to shed light on the transformative journey towards personal wholeness, capturing the beauty of introspection and embracing the profound depth of the human experience. Drawing inspiration from philosophical luminaries such as Fyodor Dostoevsky, Friedrich Nietzsche, Albert Camus, Arthur Schopenhauer, and Miyamoto Musashi, each creation unravels the complexities of the human experience. This journey through the absurd, celebrating individualism and embracing transformative narratives, transcends philosophical concepts, resonating with personal experiences and cultural influences.
        </p>
        <p>Spanning immersive websites to evocative multimedia paintings and drawings, my creations merge fine arts, graphic design, and technology. Projects like SAP (FORTHESOUL), 2022, exemplify my commitment to pushing creative boundaries. SOLISPHERE aims to connect with you on a profound level, sparking introspection and inviting you to delve into the depth into its meaning. Each piece serves as a portal into existential themes—absurdism, nihilism, and existentialism—inviting you to contemplate the depth of the human experience and infuse its meaning with your unique interpretation and engagement.    </p> 
        
        
        <section className="skills-container">
  <div className='skills-header'>
  <h2>Skills</h2>
  <p>*Skills extend beyond the showcased</p>
  </div>
  <div className="skills-list">
    <div className="skill-category">
      <p>Project Management</p>
      <p>UI/UX Design</p>
      <p>Agile Development</p>
      <p>Fine Arts</p>
      <p>Adobe Photoshop</p>
      <p>Adobe Illustrator</p>
      <p>Full-Stack Development</p>
      <p>Object-Oriented Programming</p>
      <p>Javascript</p>
      <p>React</p>
      <p>SQL</p>
      <p>Git</p>
      <p>Node.js</p>
      <p>Application Programming Interfaces</p>
      <p>Postgres</p>
      <p>Graphic Design</p>
      <p>CSS</p>
      <p>HTML</p>
      <p>Wireframing</p>
      <p>Figma</p>
      <p>Computer-Aided Design</p>
      <p>Client Relations</p>
      <p>Problem Solving</p>
      <p>Attention to Detail</p>
      <p>Collaborative Leadership</p>
    </div>
  </div>
</section>

      </section>
      </section>
      
      </section>
      <section className="about-row-2">
        <section className="beyond-the-canvas-image-container">
        <div className="beyond-column">
        <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <h2>Beyond the Canvas</h2>
        <p>
        My journey extends beyond static canvases and intricate sculptures, propelled by a passion for creating impactful software like Second Wind and CareerSpring's Interest Finder feature. I believe that software has the power to peer into the depths of problems, and illuminate these challenges by providing tangible solutions to real-world problems that plague society.
        </p>
        <p>This commitment stems from a deep-seated belief in the potential of technology to strengthen personal journeys and foster growth within each individual. Software, in its essence, becomes a guiding light, offering solutions that navigate the complexities of existence. It is an unwavering pursuit to peer into the darkness, understanding problems at their core, and crafting solutions that resonate with the human experience. In each line of code and every project undertaken, the goal remains clear - to contribute meaningfully to the betterment of society, providing tools that empower individuals to navigate their paths with courage, resilience, and a renewed sense of purpose. This vision, harmonizing with the overarching themes of SOLISPHERE, envisions a future where technology becomes a transformative force, shedding light on the darkest corners of our collective journey.</p>
        </div>
        <div className='image-with-description-container'>
        <div className="image-with-description-v1">
        
        <img src="/images/secondwind.jpg" alt="desc"/>
        <p>
        Second Wind, a full stack online community-based platform that provide resources, support, and employment for those impacted by the criminal justice system.   </p>
        </div>
        <div className="image-with-description-v1">
        
        <img src="/images/careerspring.jpg" alt="desc"/>
        <p className="image-text-2">As a Developer Contractor, I’ve been instrumental in developing software like CareerSpring’s Career Interest Profiler by leveraging JavaScript, HTML & CSS. This custom career assessment tool seamlessly integrated into WordPress serves as a beacon for individuals exploring their professional paths. 
        </p>
      
        </div>
        <div className="image-with-description-v1">
        <img src="/images/SAP.JPG" alt="desc"/>
        <p className="image-text-3">SAP (FORTHESOUL), represents a convergence of 3D modeling with AutoCAD, incorporating components such as a PIR motion sensor, DFPlayer, SD card, jumper wires, and Arduino Uno. Within the intricate model, the sculpture delivers a spoken narrative drawn from a fusion of written words by Jean-Paul Sartre, Albert Camus, and my own alterations through text-to-speech software.
        </p>
        </div>
        <div className="image-with-description-v1">
        <img src="/images/metvoyager.jpg" alt="desc" className="metvid" />
        <p className="image-text-4">METVoyager is a web platform I developed that leverages the MET API to deliver artwork recommendations based on search functionality or by selecting specific categories to generate art that matches. The platform also allows users to save and revisit favorite artworks in their own personal gallery.</p>
        </div>
        </div>
       
        </section>
       
      </section>
    
      <section className="about-row-3">
      <section className="upcoming-projects">
        <div className="upcoming-projects-text-section">
        <h2>Upcoming Projects</h2>
        <p>*Not limited to the showcased</p>
        </div>
        <div className="upcoming-projects-column-2">
        <div className="image-with-description" id="chrome-container" >
      <video autoPlay muted width="auto" loop playsInline controls={false}>
            <source src='/videos/heartinchrome.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      <div className='chrome-text'>
      <p>A cyberpunk odyssey unfolds in "Heart in Chrome," a graphic novel currently in the throes of creation exploring the sinister nexus of art, identity, and power.</p>
      </div>
    </div>
    
    <div className="image-with-description" id="tats">
    <div className="tattoo-text">
    <p>Beyond the realms of traditional art, I'm venturing into the world of tattooing, specializing in traditional black and grey styles. As my journey unfolds, I aspire to master diverse areas, including color realism and more. This new chapter adds another layer to my creative odyssey, exploring different ways to connect art with personal experiences and cultural influences.</p>
    </div>
    <div className="tattoo-mini-gallery">
      <div className='image-column-1'>
      <img src = {`/images/${tattooImages[0]}`} alt= {"tat-0"} />
      </div>
      <div className='image-column-2'>
      <img src = {`/images/${tattooImages[4]}`} alt= {"tat-4"} />
      <img src = {`/images/${tattooImages[3]}`} alt= {"tat-3"} />
      </div>  
    </div>
    </div>
    </div>
      </section>
      </section>

      <section className="contact-container">
        <div className='contact-img'>
          <video className="contact-image" autoPlay muted width="auto" loop playsInline controls={false}>
            <source src='/videos/skull.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <div className='contact-information-container'>
        <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <h2>Contact Information</h2>
        <p>
          Connect with me on social media, explore my portfolio, or reach out via email. I'd love to hear your thoughts and insights.
        </p>
        <p>
         <a href="mailto:your.email@example.com">lukannelson@gmail.com</a>
        </p>
        <div className="social-media-row">
                <div className="social-media-links">
                    <a href="https://www.instagram.com/dan.da.solo/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://github.com/danielnelson37" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://medium.com/@lukannelson" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMedium} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/dnelson777" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
            </div>
           
      </section>
    </div>
  );
};

export default AboutPage;
