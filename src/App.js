

import './styles.css';
// import components
import Navbar from './components/Navbar';
// import pages
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import PatternEditor from './pages/PatternEditor';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
