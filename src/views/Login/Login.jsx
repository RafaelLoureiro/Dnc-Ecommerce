import './index.scss';
import Header from '../../components/Header/Header';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className='login'>
            <Header/>
            <form className='login__form'>
                <h1>Acesse seu login ou cadastre-se!</h1>
                <h2>você pode entrar com seu CPF</h2>
                <div className='login__input--warpper'>
                    <label htmlFor='name'>Digite se CPF:</label>
                    <input 
                    type="text"
                    placeholder='Nome Completo'
                    id='name'
                    className='login__input-name'
                    />
                    <label htmlFor='password'>Senha:</label>
                    <input 
                    type="passwors" 
                    placeholder='********'
                    />
                </div>
                <button type='submit'>
                    <Link to={"/home"}>Entrar</Link>
                </button>
            </form>
        </section>
    );
};

export default Login;