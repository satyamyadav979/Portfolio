import Google from './google copy.svg';
import GitHub from './github.svg';
import Linked from './linkedin-icon.png'
import Typing from './Typing';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className='div'>
            <div className="Nav">
                <ul className="NavList">
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
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            
            <h1 className='h1' id='h1'>Satyam Yadav</h1>
            <div className='header'>
                <h3>I'm a</h3>
                <Typing 
                    text={[
                        
                        " Developer",
                        "Software Developer",
                        "Web Developer",
                        "Designer",
                        "Freelancer",
                        "Programmer",  

                    ]}
                    typingspeed={100}
                    deletingspeed={50}
                    duration={1000}
                />
            </div>
            
            <div className='Image'>
                <a  id='insta'>
                    <img src={Linked} alt="Instagram" style={{ height: '50px', width: '50px' }} />
                </a>
                <a  id='google'>
                    <img src={Google} alt="Google" style={{ height: '50px', width: '50px' }} />
                </a>
                <a  id='Github'>
                    <img src={GitHub} alt="GitHub" style={{ height: '50px', width: '50px' }} />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
