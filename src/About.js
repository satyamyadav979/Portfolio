import Image from './Photo.jpg'
import './About.css';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio'
function About(){
    return(
        <div>
            <div className="Nav-o">
                <ul className="NavList">
                    <h1 className='h1'>Siddharth Baleja</h1>
                    <li className='tree'>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Education">Education</Link>
                    </li>
                    <li>
                        <Link to="/Experience">Experience</Link>
                    </li>
                    {/* <li>
                        <Link to="/Projects">Projects</Link>
                    </li> */}
                    <li>
                        <Link to="/Skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 id='h22'>ABOUT ------------</h2>
            </div>
            <div className='section1'>
                <img className='img'
                        src={Image} 
                        alt="Image" 
                        
                    />
                <div className='indefine'>

                    <p className='p'>Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.</p>
                    <div id='h41'>

                        <h4>
                            <span className="green">{'>'}</span> Birthday: 1 September 2001
                        </h4>
  

                        <h4>
                            <span className="green">{'>'}</span> City: Porbandar, Gujarat
                        </h4>

                    </div>
                    <div id='h42'>
                        <h4>
                            <span className="green">{'>'}</span> Phone: 9090XXXXXX
                        </h4>
                        <h4>
                            <span className="green">{'>'}</span> Email: siddharthbaleja83@gmail.com
                        </h4>

                    </div>
                </div>
                <div>
            </div>
            </div>
            <h2 id='h22'>INTERESTS</h2>
            <div class="container">
        <div class="interests">
            <div class="interest-grid">
                <div class="interest-item">
                    {/* <img src="icons/software-development.png" alt="Software Development Icon"> */}
                    <span>Software Development</span>
                </div>
                <div class="interest-item">
                    {/* <img src="icons/machine-learning.png" alt="Machine Learning Icon"> */}
                    <span>Machine Learning</span>
                </div>
                <div class="interest-item">
                    {/* <img src="icons/computer-vision.png" alt="Computer Vision Icon"> */}
                    <span>Computer Vision</span>
                </div>
                <div class="interest-item">
                    {/* <img src="icons/natural-language-processing.png" alt="Natural Language Processing Icon"> */}
                    <span>Natural Language Processing</span>
                </div>
                <div class="interest-item">
                    {/* <img src="icons/software-engineering.png" alt="Software Engineering Icon"> */}
                    <span>Software Engineering</span>
                </div>
                <div class="interest-item">
                    {/* <img src="icons/visualization.png" alt="Visualization Icon">/ */}
                    <span>Visualization</span>
                </div>
                <div class="interest-item">
                    {/* <img src="icons/algorithms.png" alt="Algorithms Icon"> */}
                    <span>Algorithms</span>
                </div>
                <div class="interest-item">
                    {/* <img src="icons/image-processing.png" alt="Image Processing Icon"> */}
                    <span>Image Processing</span>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default About