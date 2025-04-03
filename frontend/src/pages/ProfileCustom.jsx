import { Col, Container, Row } from "react-bootstrap";
import "../css/Profile.css";
import { Link } from "react-router-dom";

import { Avatar, IconButton } from "@mui/material";

import NavBarCustomProfile from "../components/NavBarCustom Profile";
import AccountCarousel from "../components/AccountCarousel";
import FooterCustom from "../components/FooterCustom";
import CarouselCustom from "../components/CarouselCustom";

function ProfileCustom() {
  return (
    <>
      <div className="background z-n1 position-absolute w-100"></div>
      <NavBarCustomProfile />
      <Container className="z-1 mb-5">
        <div className="header d-flex flex-column flex-md-row align-items-center">
          <IconButton size="big" sx={{ ml: 0 }}>
            <Avatar className="fs-1" sx={{ width: 80, height: 80 }}>
              A
            </Avatar>
          </IconButton>
          <div className="d-flex flex-column">
            <p className="text-white fs-1 fw-semibold m-0">Hi, Alessandro</p>
            <p className="text-white m-0">This is your profile</p>
          </div>
        </div>
        <Row>
          <div className="d-flex flex-column flex-md-row align-items-top justify-content-between mt-3 gap-3 gap-md-2">
            <Col xs={12} md={8} className="bg-white rounded shadow text-black p-2">
              <AccountCarousel />
              <Link className="fw-medium">Discover more</Link>
            </Col>
            <Col xs={12} md={3}>
              <div className="bg-white rounded shadow text-black p-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
                </svg>
                <p className="fw-medium mt-1">You have no active subscriptions!</p>
                <Link className="fw-medium">Discover more</Link>
              </div>
              <div className="bg-white rounded shadow text-black p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <p className="fw-medium mt-1">Destinations of the month</p>
                <Link className="fw-medium">Discover more</Link>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
      <CarouselCustom />
      <FooterCustom />
    </>
  );
}

export default ProfileCustom;
