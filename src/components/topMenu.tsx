import { evidenceStore } from "../store/evidencesStore"


export const evidencesList: string[] = ['EMF 5', 'Freezing Temp', 'Spirit Box', 'Spirit Orb', 'D.O.T.S', 'Ultraviolet', 'Writing']
export const evidencesListTeste: string[] = []


function Menu() {

    const { evidenciasChecadas, setEvidenciasChecadas } = evidenceStore();

    function handlerOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            setEvidenciasChecadas([...evidenciasChecadas, e.target.name])
        } else {
            setEvidenciasChecadas(evidenciasChecadas.filter(name => name !== e.target.name))
        }
        // console.log(evidenciasChecadas)
    }

    function criaCheckboxEvidencia(item: string, index: number) {

        return (
        <label key={index}> 
            <input 
            type="checkbox" 
            name={item} 
            id={item} 
            checked={evidenciasChecadas.includes(item)}
            onChange={handlerOnChange}
            />
            
            <img src={"assets/img/" + item + ".png"}></img> 
            {item}  
        </label>)
    }


    return (
        <>
            <section className="menu-container">
                <h4>Select found evidences</h4>

                {evidencesList.map((item, index) => criaCheckboxEvidencia(item, index))}
            
            </section>
        </>
        
    );
}


export default Menu;