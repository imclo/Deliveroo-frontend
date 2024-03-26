const Cart = ({ items, setItems, totalBasket, setTotalBasket }) => {
  let shippingCost = 2.5;
  let totalCartPrice = Number(totalBasket) + shippingCost;

  return (
    <>
      <div className="Cart">
        <div className="Cart-card">
          <button>Valider mon panier</button>
          <div className="Cart-empty">Votre panier est vide</div>
        </div>
        <div className="Cart-line">
          <div className="Cart-counter"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
