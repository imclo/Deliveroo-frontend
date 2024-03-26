import logo from "../assets/imgs/logo-teal.svg";

const Header = (props) => {
  const { restaurantName, description, imgRestau } = props;
  return (
    <>
      <div className="whiteBackground">
        <div className="TopBar">
          <div className="TopBar-center">
            <img src={logo} className="logo" alt="" />
          </div>
        </div>
        <div className="RestaurantInfos-center">
          <div className="RestaurantInfos-texts">
            <h1>{restaurantName}</h1>
            <p>{description}</p>
          </div>
          <img
            className="RestaurantInfos-cover"
            src={imgRestau}
            alt="restaurant cover"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
