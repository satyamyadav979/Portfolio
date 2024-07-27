import Scaler from './Scaler-UG_Logo-Color.png'
import Indian from './Indian_Institute_of_Technology_Bombay_Logo.svg.png'
import './Education.css'
import { Link } from 'react-router-dom'
function Education(){
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

    <h2 id='h22'>Education</h2>
    <div class="education-container">
        <div class="Section">
            <div class="image-container">
                <img src={Scaler} ></img>
            </div>
            <div class="details">
                <i>Bachelor's  in Computer Science</i>
                <h3>January 2023 - Present</h3>
              
                <ul>
                    
                    <li>Computing & Programming</li>
                    <li>Foundation Of Algorithms</li>
                </ul>
            </div>
        </div>
        
                
         </div>

        {/* <div class="certifications">
            <h2>Online Certification</h2>
            <ul>
                <li>Deep Learning Specialization - Coursera</li>
                <li>Machine Learning - Coursera</li>
                <li>TensorFlow in Practice - Coursera</li>
                <li>Applied Data Science with Python - Coursera</li>
                <li>Data Science Methodology - Coursera</li>
            </ul>
        </div> */}
        </div>
    )
}
export default Education