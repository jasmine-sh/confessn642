import {NavLink} from "react-router-dom";

export default function Navbar()
{
    return (
        <div className="navbar">
            <ul>
                <nav>
                    <li><NavLink to="home"
                                 className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                        Make a Confessn</NavLink></li>
                    <li><NavLink to="projects"
                                 className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                        All Posts</NavLink></li>
                    <li><NavLink to="/"
                                 className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                        About/Contact</NavLink></li>
                </nav>
            </ul>
        </div>
        )
}