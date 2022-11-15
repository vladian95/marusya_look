import Topbar from './components/topbar/Topbar';
import Info from './components/info/Info';
import Job from './components/job/Job';
import Contact from './components/contact/Contact';
import Brows from './components/brows/Brows';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="Sections">
        <Info />
        <Job />
        <Brows />
        <Contact />
      </div>
    </div>
  );
}

export default App;
