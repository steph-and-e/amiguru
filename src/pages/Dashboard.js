import DashboardBanner from "../components/DashboardBanner"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function Dashboard() {
    return (
        <div>
            <Navbar/>
            <div className="dashboard-grid-container">
                <Sidebar/>
                <DashboardBanner/>
                <div>

                </div>
            </div>
        </div>
    )
}