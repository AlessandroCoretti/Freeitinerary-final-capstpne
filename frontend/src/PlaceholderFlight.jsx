import { Card, Placeholder } from "react-bootstrap";

function PlaceholderFlight() {
  return (
    <Card className="border border-1 shadow-lg mb-2">
      <Card.Body>
        <div className="top-bar d-flex align-items-center justify-content-between">
          <div className="air-logo d-flex align-items-center gap-3">
            <Placeholder as={Card.Title} animation="glow" />
            <Placeholder className="m-0 fs-5" animation="glow"></Placeholder>
          </div>
          <Placeholder className="m-0 fs-5" animation="glow"></Placeholder>
        </div>
        <div className="dep-arr d-flex justify-content-around mt-3">
          <div className="origin d-flex flex-column justify-content-center align-items-center gap-4">
            <Placeholder className="m-0 fs-2 fw-bold" animation="glow"></Placeholder>
            <Placeholder as={Card.Text} animation="glow" className="fs-5"></Placeholder>
          </div>
          <div className="destination d-flex flex-column justify-content-center align-items-center gap-4">
            <Placeholder className="m-0 fs-2 fw-bold" animation="glow"></Placeholder>
            <Placeholder as={Card.Text} className="fs-5" animation="glow"></Placeholder>
          </div>
        </div>
        <image className="d-flex justify-content-center">
          <Placeholder as={Card.Title} animation="glow" />
        </image>

        {/*cheapestFlight?.legs[0]?.origin?.city*/}
        <div className="date-time d-flex justify-content-around align-items-center">
          <Placeholder animation="glow" as={Card.Text} className="d-flex flex-column justify-content-center align-items-center fs-5 gap-2">
            <Placeholder animation="glow" className="m-0"></Placeholder>
            <Placeholder animation="glow" className="m-0"></Placeholder>
          </Placeholder>

          {/*cheapestFlight?.legs[1]?.origin?.city*/}

          <Placeholder animation="glow" as={Card.Text} className="d-flex flex-column justify-content-center align-items-center fs-5 gap-2">
            <Placeholder animation="glow" className="m-0"></Placeholder>
            <Placeholder animation="glow" className="m-0"></Placeholder>
          </Placeholder>
        </div>
        <Placeholder animation="glow" as={Card.Text} className="d-flex justify-content-end fs-4"></Placeholder>
      </Card.Body>
    </Card>
  );
}

export default PlaceholderFlight;
