
import './index.scss';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Search from '../../components/Search/search';
import ProductsCards from '../../components/ProductsCards/productsCards';

const Home = ({ data }) => {
    return (
        <div className='home'>
            <HeaderMenu/>
            <Search/>
            <div className="home__products">
                {data.map((product) => (
                         <ProductsCards key={product.id} data={product} />
                    ))}
            </div>
            
        </div>
       
    );
};

export default Home;