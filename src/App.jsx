import Topbar from './components/topbar/Topbar';
import Info from './components/info/Info';
import Job from './components/job/Job';
import Contact from './components/contact/Contact';
import Brows from './components/brows/Brows';
import MakeUp from './components/makeUp/MakeUp';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="Sections">
        <Info />
        <Job />
        <Brows />
        <MakeUp />
        <Contact />
      </div>
    </div>
  );
}

export default App;
