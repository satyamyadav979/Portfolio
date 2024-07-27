import github from './github.svg'
import email from './envelope-solid.svg'
import location from './location-dot-solid.svg'
import phone from './phone-volume-solid.svg'
import share from './share-nodes-solid.svg'
import LinkedIn from './linkedin.svg'
import Google from './google.svg'
import './Contact.css'
import { Link } from 'react-router-dom'
function Contact(){
    return(
        <div>
            <div className="Nav-o">
                <ul className="NavList">
                    <h1 className='h1'>Satyam Yadav</h1>
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
            <h2 id='h22'> Contact-------</h2>
            <div className="Contacts">
                <ul className="Contact1">
                    <div className='locate'>
                        <img src={location} id='location'/>
                        <h3 id='h3'>My Address</h3>
                    </div>
                    <div className='li'>
                        <li>Electronic City-Phase1</li>
                        <li>Karnataka</li> 
                        <li>India</li>
                    </div>
                </ul>
                <ul className="Contact2">
                    <div className='Social'>
                        <img src={share} id='social' />
                        <h3 id='h4'>Social Profiles</h3>
                    </div>
                    <div className='img'>
                        <a >
                            <img src={github} id='git'/>
                        </a>
                        <a >
                            <img src={LinkedIn} id='Linked'/>
                        </a>
                        <a >
                            <img src={Google} id='Google' />
                        </a>
                    </div>
                </ul>
            </div>
            
        </div>
    )
}
export default Contact