import BackgroundImages from "./BackgroundImage";
import CarouselCustom from "./CarouselCustom";
import FooterCustom from "./FooterCustom";
import NavBarCustomProfile from "./NavBarCustom Profile";
import OfferCard from "./OfferCard";
import "./css/Home.css";

function HomeCustomIn() {
  return (
    <div className="home-container overflow-hidden">
      <NavBarCustomProfile />
      <div className="img-section">
        <BackgroundImages />
      </div>
      <OfferCard />
      <CarouselCustom />
      <FooterCustom />
    </div>
  );
}

export default HomeCustomIn;
