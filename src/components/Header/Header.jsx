import  decLogo from "../../assets/logo.png";
import "./index.scss";

const Header = () => {
    return (
      // Block
      <div className='header'>
        <img className="header__img"
         src={decLogo} alt="logo dnc" />
      </div>
    );
};

export default Header