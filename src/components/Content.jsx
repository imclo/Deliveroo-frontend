import Cart from "./Cart";

const Content = ({
  categories,
  choices,
  setChoices,
  totalBasket,
  setTotalBasket,
}) => {
  const reducingText = (text) => {
    if (text.length > 30) {
      return text.substring(0, 30) + "...";
    } else {
      return text;
    }
  };

  let nonEmptyCategories = categories.filter((elem) => elem.meals.length > 0);

  return (
    <>
      <main>
        <div className="MenuItem">
          <div className="MenuItem-texts">
            {nonEmptyCategories.map((elem) => {
              // console.log(elem);
              return (
                <>
                  <h3 key={elem.name}>{elem.name}</h3>
                  <div className="MenuItems">
                    {elem.meals.map((items) => {
                      return (
                        <>
                          <div
                            className="Menu"
                            onClick={() => {
                              // console.log(choices);
                              let copy = [...choices];
                              let isProductFound = false;
                              for (let i = 0; i < copy.length; i++) {
                                // console.log(i);
                                if (copy[i].title === items.title) {
                                  copy[i].quantity++;
                                  copy[i].totalPrice =
                                    items.price * copy[i].quantity;

                                  setTotalBasket(copy[i].totalPrice);
                                  isProductFound = true;
                                  break;
                                }
                              }
                              if (isProductFound === false) {
                                copy.push({
                                  title: items.title,
                                  price: Number(items.price),
                                  totalPrice: Number(items.price),
                                  quantity: 1,
                                });

                                setTotalBasket(totalBasket + copy.totalPrice);
                              }

                              setChoices(copy);
                              let subtotal = 0;
                              for (let i = 0; i < copy.length; i++) {
                                subtotal += copy[i].totalPrice;
                                setTotalBasket(subtotal);
                              }
                            }}
                          >
                            <div className="MenuChoices">
                              <div className="MenuColumn1">
                                <div className="MenuChoicesText">
                                  <p className="mealsTitle" key={items.title}>
                                    {items.title}
                                  </p>
                                  <p
                                    className="mealsDescription"
                                    key={items.description}
                                  >
                                    {reducingText(items.description)}
                                  </p>
                                </div>
                                <div className="mealsPricePopularity">
                                  <p className="mealsPrice" key={items.price}>
                                    {items.price}€
                                  </p>

                                  {items.popular && (
                                    <>
                                      <p className="icon-STAR_FILL"></p>
                                      <p className="mealsPopular">Populaire</p>
                                    </>
                                  )}
                                </div>
                              </div>
                              {items.picture && (
                                <div className="MenuChoicesPicture">
                                  <img
                                    className="mealsPicture"
                                    src={items.picture}
                                    alt=""
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Cart
          choices={choices}
          totalBasket={totalBasket}
          setTotalBasket={setTotalBasket}
          setChoices={setChoices}
        />
      </main>
    </>
  );
};

export default Content;
