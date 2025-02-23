import React from 'react';

function Menu() {

    
    function teste3(item: string) {
        return (<label> <input type="checkbox" name={item} id={item} /><img src={"assets/img/" + item + ".png"}></img> {item}  </label>)
    }
    
    return (
        <>
            <section className="menu-container">
                <h4>Select found evidences</h4>

                {teste3('EMF 5')}
                {teste3('Freezing Temp')}
                {teste3('Spirit Box')}
                {teste3('Spirit Orb')}
                {teste3('D.O.T.S')}
                {teste3('Ultraviolet')}
                {teste3('Writing')}

            </section>
        </>
        
    );
}


export default Menu;