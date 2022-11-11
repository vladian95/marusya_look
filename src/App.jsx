import Topbar from './components/topbar/Topbar';
import Info from './components/info/Info';
import Job from './components/job/Job';
import Contact from './components/contact/Contact';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="Sections">
        <Info />
        <Job />
        <Contact />
      </div>
    </div>
  );
}

export default App;
