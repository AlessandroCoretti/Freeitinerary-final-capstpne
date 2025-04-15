import BackgroundImages from "../components/BackgroundImage";
import CarouselCustom from "../components/CarouselCustom";
import FooterCustom from "../components/FooterCustom";
import NavBarCustomProfile from "../components/NavBarCustomProfile";
import OfferCard from "../components/OfferCard";
import "../css/Home.css";

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
