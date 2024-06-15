import './App.css';
import Heading from './components/Heading.jsx';
import ArenaHeader from './components/ArenaHeader.jsx';
import Game from './components/Game.jsx';

function App() {
  return (
    <div id='App' className='flex-col'>
      <div id='header' className=''>
        <Heading />
      </div>

      <div id='arena'  className='flex-col p-4'>
        <ArenaHeader />
        <Game />
      </div>


    </div>
  );
}

export default App;
