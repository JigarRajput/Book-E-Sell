import React from "react";
import '../index.css';

const Searchbox = () => {
return(

    <div>    
        <div className="searchbar-container-main">
          <form className="search-bar-form" action="">
            <input type="text" placeholder="What are you looking for.." name="search" id="search-input-bar"></input>
            <button type="submit" id="search-button"><img src="./images/search.svg"/>Search</button>
            <button type="reset" id="cancel-button">Cancel</button>
          </form>
        </div>
    </div>



);

}
export default Searchbox;