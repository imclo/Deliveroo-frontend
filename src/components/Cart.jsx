import plus from "../assets/imgs/add.png";
import minus from "../assets/imgs/minus.png";

const Cart = ({ choices, setChoices, totalBasket, setTotalBasket }) => {
  let shippingCost = 2.5;
  let totalCartPrice = Number(totalBasket) + shippingCost;

  return (
    <>
      <div className="Cart-card">
        <button
          className={
            "Cart-validate" + (choices.length === 0 ? " Cart-disabled" : "")
          }
        >
          Valider mon panier
        </button>
        {choices.length === 0 ? (
          <div className="Cart-empty">Votre panier est vide</div>
        ) : (
          <div className="Cart-line">
            <div className="Cart-counter">
              {choices.map((choice, index) => {
                const decrement = () => {
                  const copy = [...choices];
                  if (copy[index].quantity > 1) {
                    copy[index].quantity--;

                    copy[index].totalPrice =
                      copy[index].totalPrice - copy[index].price;
                  } else {
                    copy.splice(index, 1);
                  }
                  setChoices(copy);

                  let subtotal = 0;
                  for (let i = 0; i < copy.length; i++) {
                    subtotal += Number(copy[i].totalPrice);
                    setTotalBasket(subtotal);
                  }
                };

                const increment = () => {
                  const copy = [...choices];
                  copy[index].quantity++;
                  copy[index].totalPrice =
                    copy[index].totalPrice + copy[index].price;
                  setChoices(copy);

                  let subtotal = 0;
                  for (let i = 0; i < copy.length; i++) {
                    subtotal += Number(copy[i].totalPrice);
                    setTotalBasket(subtotal);
                  }
                };

                return (
                  <div key={index} className="d-flex space-between choiceLine">
                    <div className="d-flex align-items-center">
                      <img
                        src={minus}
                        alt="logo minus"
                        className="btn-quantity"
                        onClick={decrement}
                      />
                      <span className="basketPriceQty">
                        {choices[index].quantity}
                      </span>
                      <img
                        src={plus}
                        alt="logo plus"
                        className="btn-quantity"
                        onClick={increment}
                      />
                      <span className="choiceTitle">{choice.title} </span>
                    </div>
                    <span className="basketPriceQty">
                      {choice.totalPrice.toFixed(2)}&nbsp;€
                    </span>
                  </div>
                );
              })}

              <div className="underChoices">
                <hr />
                <div className="choiceLine">
                  <span>Sous-total</span>
                  <span>{totalBasket.toFixed(2)} € </span>
                </div>
                <div className="choiceLine">
                  <span>Frais de livraison</span>
                  <span>{shippingCost.toFixed(2)} €</span>
                </div>

                <hr />
                <div className="choiceLine bold">
                  <span className="basketTotal">Total</span>
                  <span className="basketTotal">
                    {totalCartPrice.toFixed(2)} €
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
