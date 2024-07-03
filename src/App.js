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

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Dashboard/>

    </>

  );
}

export default App;
