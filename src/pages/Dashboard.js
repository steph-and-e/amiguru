import DashboardBanner from "../components/DashboardBanner"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Dashboard() {
    return (
        <div>
            <Navbar/>
            <div className="dashboard-container">
                <Sidebar/>
                <DashboardBanner/>
                <div className="dashboard-main">
                    <div className="features-container dashboard-section-container">
                        <p className="medium">Let's start with the basics!</p>
                        <div className="features-cards-container cards-container">
                            <a href="/">
                                <p className="feature-name medium">Pattern to 3D <FaArrowRightLong className="arrow"/></p>
                                <p className="feature-description">Generate a 3D model from written instructions</p>
                            </a>
                            <a href="/">
                                <p className="feature-name medium">Picture to pattern <FaArrowRightLong className="arrow"/></p>
                                <p className="feature-description">Take a picture of any object and transform it to a 3D pattern!</p>
                            </a>
                            <a href="/">
                                <p className="feature-name medium">Explore our templates <FaArrowRightLong className="arrow"/></p>
                                <p className="feature-description">Browse our collection of body components</p>
                            </a>
                            {/* <a href="/">
                                <p className="feature-name medium">Connect with pattern testers <FaArrowRightLong className="arrow"/></p>
                                <p className="feature-description">Browse our collection of body components</p>
                            </a> */}
                        </div>
                    </div>
                    <div className="recent-projects-container dashboard-section-container">
                        <p className="medium">Pick up where you left off</p>
                        <div className="recent-projects-cards-container cards-container">
                            <a href="/">
                                Hi
                            </a>
                            <a href="/">
                                Hi
                            </a>
                            <a href="/">
                                Hi
                            </a>
                            <a href="/">
                                Hi
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}