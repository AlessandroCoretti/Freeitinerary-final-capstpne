import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function AccountCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Row>
          <Col md={3}>
            <div className="rounded border shadow-lg h-100 d-flex flex-column align-items-center py-2 gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#69bfaf" className="bi bi-gift-fill mt-2" viewBox="0 0 16 16">
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
              </svg>
              <p className="m-0 fw-medium">-10% on stays</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="rounded border shadow-lg h-100 d-flex flex-column align-items-center py-2 gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#69bfaf" className="bi bi-airplane-fill mt-2" viewBox="0 0 16 16">
                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
              </svg>
              <p className="m-0 fw-medium"> -10% on your flights</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="rounded border shadow-lg h-100 d-flex flex-column align-items-center py-2 gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#69bfaf" className="bi bi-gift-fill mt-2" viewBox="0 0 16 16">
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
              </svg>
              <p className="m-0 fw-medium">Free breakfast</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="rounded border shadow-lg h-100 d-flex flex-column align-items-center py-2 gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#69bfaf" className="bi bi-houses-fill mt-2" viewBox="0 0 16 16">
                <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.5 2.5 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354z" />
                <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708z" />
              </svg>
              <p className="m-0 fw-medium">Free upgrades of accommodation</p>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={3}>
            <div className="rounded border shadow-lg h-100 d-flex flex-column align-items-center py-2 gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#69bfaf" className="bi bi-globe-europe-afr mt-2ica" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.81.81 0 0 1 1.034-.275.81.81 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34q.118.04.243.054c.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.33.33 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501" />
              </svg>
              <p className="m-0 fw-medium">-25% on European destinations</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="rounded border shadow-lg h-100 d-flex flex-column align-items-center py-2 gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#69bfaf" className="bi bi-info-circle-fill mt-2" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
              </svg>
              <p className="m-0 fw-medium">Assistance on stays</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="rounded border shadow-lg h-100 d-flex flex-column align-items-center py-2 gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#69bfaf" className="bi bi-info-circle-fill mt-2" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
              </svg>
              <p className="m-0 fw-medium">Assistance with your insurance</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="rounded border shadow-lg h-100 d-flex flex-column align-items-center py-2 gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#69bfaf" className="bi bi-info-circle-fill mt-2" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
              </svg>
              <p className="m-0 fw-medium">Work with us</p>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default AccountCarousel;
