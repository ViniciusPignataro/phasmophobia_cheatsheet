interface GhostCardProps {
  key: number;
  name: string;
  evidences: string[];
  speed: string | number;
  ability: string[];
}

function GhostCard({ name, evidences, speed, ability }: GhostCardProps) {

  function processArrayToListItem(item: string, index: number) {
    return (<li key={index}> {item} </li>);
  }

  function printArray(item: string, index: number) {
    return (<p key={index}> <img src={"assets/img/"+ item +".png"} />{item} </p>)
  }
  
  return (
    <>
      <div className="ghostcard">
        <div className="esquerda">
          <h3 className="ghost-name"> {name}</h3>
          <div className="evidences-container">
          {evidences.map(printArray)}
          </div>
          <div className="speed-container">
            <p className="speed">{speed} m/s</p>
          </div>
        </div>
        <hr></hr>
        <div className="abilities-container">
          {ability.map(processArrayToListItem)}
        </div>
      </div>
    </>
  );
}

export default GhostCard;
 