const Content = ({ categories, mealsTitle }) => {
  const reducingText = (text) => {
    if (text.length > 55) {
      return text.substring(0, 55) + "...";
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
                          <div className="Menu">
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
      </main>
    </>
  );
};

export default Content;