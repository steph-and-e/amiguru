import './styles.css';
// import components
import Button from './components/Button';
import DashboardButton from './components/DashboardButton';
import DashboardMenu from './components/DashboardMenu';
import Navbar from './components/Navbar';
// import pages
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import PatternEditor from './pages/Pattern Editor';

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title"> amiguru</a>
            <ul className="nav-menu">
                <li>
                    <a href="/Lorem">Lorem</a>
                </li>
                <li>
                    <a href="/Ipsum">Ipsum</a>
                </li>
                <li>
                    <a href="/Dolor">Dolor</a>
                </li>
            </ul>
            {/* <div class="stretch"></div> */}
            <div class="authentication">
                <Button colour="white" text="Log in"/>
                <Button colour="purple" text="Sign up"/>
            </div>
        </nav>
    )
}