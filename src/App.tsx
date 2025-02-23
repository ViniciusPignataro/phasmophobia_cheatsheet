import './App.css';
import GhostCard from './components/ghostCard.tsx';
import ghosts from './data/ghostData.ts';
import Menu from './components/topMenu.tsx'

function App() {
  return (
  <>
    <div>
      <Menu />
    </div>


    <div className='ghost-container'>
      {ghosts.map((ghost, index) => (
        <GhostCard 
          key={index}
          name={ghost.name}
          evidences={ghost.evidences}
          speed={ghost.speed}
          ability = {ghost.ability}
        />
      ))}
    </div>
    </>
  );
}

export default App;
 

// antdesign