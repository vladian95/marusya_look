import Topbar from './components/topbar/Topbar';
import Info from './components/info/Info';
import Job from './components/job/Job';
import Contact from './components/contact/Contact';
import Brows from './components/brows/Brows';
import MakeUp from './components/makeUp/MakeUp';
import Sert from './components/sert/Sert';
import Neon from './components/neon/Neon';
import { useContext } from 'react';
import { ThemeContext } from './context';
import './app.scss';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? '#000' : '#fff',
        color: darkMode && 'white',
      }}
    >
      <Topbar />
      <Info />
      <Job />
      <Brows />
      <MakeUp />
      {/* <Neon />
      <Sert />
      <Contact /> */}
    </div>
  );
}

export default App;
