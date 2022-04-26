import React from "react";

function SearchUser() {
    /* Prevent that users can enter more than 5 digits */
    const handleInput = (e) => {
         let maxLength = 5;
         if(e.target.value.length > maxLength) {
             e.target.value = e.target.value.slice(0, maxLength);
         }
    }

    return (
        <div className="search-zip-container">
            <form id="zip-code">
            <input type="number" onInput={handleInput} 
                placeholder="Postleitzahl"
                className="zip-input">
            </input>

            <input list="radius" 
                name="Radius" 
                placeholder="Radius"
                className="search-radius">
            </input>
            <datalist id="radius">
                <option value="0km"></option>
                <option value="2km"></option>
                <option value="5km"></option>
            </datalist>

        <button className="zip-button">Suchen</button>

        </form>        
    </div>
    );
}

export default SearchUser;