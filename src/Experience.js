import { Link } from "react-router-dom"
import './Experience.css'
function Experience(){
    return(
        <div>
            <div class="Nav-o">
                <ul class="NavList">
                    <h1 class="h1">Stayam Yadav</h1>
                    <li class="tree">
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
            <h2 id="h22">EXPERIENCE ------------ </h2>
            <div className="sec1">
                <h2 id="sec1">Bengaluru State University</h2>
                <h3>January 2023 - Present</h3>
                <i>Software Developer</i>
                <ul>
                <li>Managed large-scale deployment of JupyterHub with Nbgrader and Webwork for approx 5500 students.</li>
                <li>Configured, troubleshot, and administered server-side web applications for the statistics department.</li>
                <li>Handled Linux server administration and Apache configuration.</li>
                </ul>
            </div>
            
            
        </div>
    )
}
export default Experience