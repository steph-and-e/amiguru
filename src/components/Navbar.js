// import components
import Button from "./Button"

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title"> amiguru</a>
            <ul className="nav-menu">
                <li>
                    <a href="/Lorem">Doctor</a>
                </li>
                <li>
                    <a href="/Ipsum">Service</a>
                </li>
                <li>
                    <a href="/Dolor">About</a>
                </li>
            </ul>
            {/* <div class="stretch"></div> */}
            <div class="authentication">
                <Button colour="transparent" text="Log in"/>
                <Button colour="purple" text="Sign up"/>
            </div>
        </nav>
    )
}