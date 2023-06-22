import "./index.scss";
import searacLogo from "../../assets/search.png";
import  profileLogo  from "../../assets/profile.png";
import  favoriteLogo  from "../../assets/heart.png";

const Search = ()=> {

    return (
        <div className="searsh">
            <div className="searsh_input-container">
                <img 
                src={searacLogo} 
                alt="searchLogo"
                className="search_search-logo" 
                />
                <input type="text" placeholder="Search" />
            </div>
            <img src={profileLogo} alt="profile logo" />
            <img src={favoriteLogo} alt="favorite logo" />
        </div>
            
    );
  
};

export default Search