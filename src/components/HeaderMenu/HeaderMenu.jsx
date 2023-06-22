import "./index.scss";
import logo from "../../assets/logo.png";
import cartshop from "../../assets/cartshop.png";

const HeaderMenu = ()=> {
    return (
      <header className="header-menu">
            <img src={logo} alt="logo" className="header-menu__logo" />
            <ul>
                <li>Home</li>
                <li>Novidades</li>
                <li>Feminino</li>
                <li>Masculinio</li>
                <li>Atendimento</li>
            </ul>
            <div className="herader-menu__cart-shop">
                <h1>Meu Carrinho</h1>
                <img src={cartshop} alt="cartLogo" />
            </div>
      </header>
    )
  }

export default HeaderMenu