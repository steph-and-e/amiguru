// import components
import Button from "./Button"
import Logo from "../assets/amiguru logo.png"
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="logo-and-collapse">
                <LuMenu id="collapse-sidebar-icon"/>
                <a href="/" className="logo">
                    <img src = {Logo}/>
                </a>
            </div>
            <ul className="nav-menu">
                <li>
                    <a href="/Lorem">Payment</a>
                </li>
                <li>
                    <a href="/Ipsum">Service</a>
                </li>
                <li>
                    <a href="/Dolor">About Us</a>
                </li>
                <li>
                    <a href="/Dolor">Which Ami Are You?</a>
                </li>
            </ul>
            <div class="nav-actions">
                <Button colour="purple" text="Design a Pattern"/>
                <div className="profile-picture">
                    
                </div>
            </div>
        </nav>
    )
}