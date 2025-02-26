import './App.css';
import GhostCard from './components/ghostCard.tsx';
import ghosts from './data/ghostData.ts';
import { useEffect, useState } from 'react';
import { evidenceStore } from './store/evidencesStore.tsx';
import Menu from './components/topMenu.tsx';

function App() {
  const [ghostFilter, setGhostFilter] = useState(ghosts);
  const { evidenciasChecadas } = evidenceStore()
  
  useEffect(() => {

    setGhostFilter(ghosts.filter(ghost =>
      evidenciasChecadas.every(item => ghost.evidences.includes(item))
    ));
    
  }, [evidenciasChecadas])
  
  return (
    
    <>
      <div>
        <Menu />
      </div>

      <div className='ghost-container'>
        {ghostFilter.map((ghost, index) => (
          <GhostCard
          key={index}
          name={ghost.name}
          evidences={ghost.evidences}
          speed={ghost.speed}
          ability={ghost.ability}
          />
        ))}
      </div>
    </>
  );
}

const a = document.getElementById('Writing');

console.log(a)
export default App;



// antdesign