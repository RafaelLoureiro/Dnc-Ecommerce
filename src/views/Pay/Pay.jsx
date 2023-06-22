
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import './index.scss';

const Pay = ({ data }) => {
  const { payId } = useParams();
  const selectedProduct = data.find((product) => product.id ==
    payId);
  return (
    <div>
      <Header />
      <div className="pay-datail">
        <div className="pay-datail__left-side">
          <form>
            <div className="pay-datail__input-warpper">
              <lable htmlFor="name">Nome:</lable>
              <input
                type="text"
                placeholder="Nome Completo"
                id="name"
                className="pay-datail__input-name"
              />
              <label htmlFor="entrega">Endereço de Entrega
              </label>
              <input
                type="text"
                id="entrega"
                placeholder="Endereço de entrega"
              />
            </div>
            <div className="pay-dateil__format">
              <h2>Forma de Pagamento</h2>
              <div className="pay-dateil__pix">
                <input type="checkbox" id="pix" name="format" />
                <label htmlFor="pix">Pix</label>
              </div>
              <div className="pay-dateil__boleto">
                <input type="checkbox" id="boleto" name="format" />
                <label htmlFor="boleto">Boleto</label>
              </div>
              <div className="pay-dateil__credit-card">
                <input type="checkbox" id="credit-card" name="format" />
                <label htmlFor="credit-card">Cartão de crédito</label>
              </div>
            </div>
            <button type="submit">
              <Link to={"/home"}>Enviar Pedido</Link>
            </button>
          </form>
        </div>
        <div className="pay-datail__right-side">
          <h2>Resumo do Pedido</h2>
          <div className="pay-detail__description">
            <div className="pay-detail__product-price">
              Produtos (1)
              :</div>
            <h1>{selectedProduct.price}</h1>
          </div>
          <div className="pay-detail__description">
            <div className="pay-detail__product-total">Total:
              <h1>{selectedProduct.price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
