import './App.css';
import Heading from './components/Heading.jsx';
import ArenaHeading from './components/ArenaHeading.jsx';
import Game from './components/Game.jsx';

function App() {
  return (
    <div id='App' className='flex-col'>
      <div id='header' className=''>
        <Heading />
      </div>

      <div id='arena'  className='flex-col p-4'>
        <ArenaHeading />
        <Game />
      </div>


    </div>
  );
}

export default App;
