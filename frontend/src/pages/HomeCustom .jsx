import BackgroundImages from "../components/BackgroundImage";
import CarouselCustom from "../components/CarouselCustom";
import FooterCustom from "../components/FooterCustom";
import NavBarCustom from "../components/NavBarCustom";
import OfferCard from "../components/OfferCard";
import "../css/Home.css";

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
