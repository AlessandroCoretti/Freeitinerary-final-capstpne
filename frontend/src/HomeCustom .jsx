import BackgroundImages from "./BackgroundImage";
import CarouselCustom from "./CarouselCustom";
import FooterCustom from "./FooterCustom";
import NavBarCustom from "./NavBarCustom";
import OfferCard from "./OfferCard";
import "./css/Home.css";

function HomeCustom() {
  return (
    <div className="home-container overflow-hidden">
      <NavBarCustom />
      <div className="img-section">
        <BackgroundImages />
      </div>
      <OfferCard />
      <CarouselCustom />
      <FooterCustom />
    </div>
  );
}

export default HomeCustom;
