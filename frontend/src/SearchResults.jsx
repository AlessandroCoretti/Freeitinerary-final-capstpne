import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ticket from "./assets/ticket.svg";
import "./css/index.css";
import "./css/SerarchResult.css";
import PlaceholderFlight from "./PlaceholderFlight";

function SearchResults() {
  const location = useLocation();
  const { fromIata, toIata, departureDate, returnDate, entityId } = location.state;

  // Stati
  const [flights, setFlights] = useState([]);
  const [cheapestFlight, setCheapestFlight] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingHotels, setLoadingHotels] = useState(false);

  // Funzioni helper
  const formatDate = (dateTime) => {
    if (!dateTime) return "";
    const date = new Date(dateTime);
    return date.toLocaleDateString("it-IT");
  };

  const formatTime = (dateTime) => {
    if (!dateTime) return "";
    const date = new Date(dateTime);
    return date.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  };

  // Recupero dei voli
  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);

      try {
        const url = `http://localhost:8080/api/flights/search?from=${fromIata}&to=${toIata}&departureDate=${departureDate}${
          returnDate ? `&returnDate=${returnDate}` : ""
        }`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Errore HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        const flightsList = data.data.itineraries || [];

        setFlights(flightsList);
      } catch (error) {
        console.error("Errore nel recupero dei voli:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [fromIata, toIata, departureDate, returnDate]);

  // Trova il volo più economico quando flights cambia
  useEffect(() => {
    if (flights.length > 0) {
      const cheapest = flights.find((flight) => flight.tags?.includes("cheapest"));
      setCheapestFlight(cheapest);
    }
  }, [flights]);

  // Recupero degli hotel
  useEffect(() => {
    const fetchHotels = async () => {
      if (!entityId || !departureDate) {
        console.error("Parametri insufficienti per la ricerca degli hotel.");
        return;
      }

      setLoadingHotels(true);

      try {
        const hotelUrl = `http://localhost:8080/api/hotels/search?entityId=${entityId}&checkInDate=${departureDate}&checkOutDate=${
          returnDate || departureDate
        }`;

        const response = await fetch(hotelUrl);

        if (!response.ok) {
          throw new Error(`Errore HTTP! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data.results && data.data.results.hotelCards) {
          setHotels(data.data.results.hotelCards);
        } else {
          console.warn("Nessun risultato per hotelCards.");
        }
      } catch (error) {
        console.error("Errore nel recupero degli hotel:", error);
      } finally {
        setLoadingHotels(false);
      }
    };

    fetchHotels();
  }, [entityId, departureDate, returnDate]);

  // Componenti di rendering
  const renderBackButton = () => (
    <div id="goback" className="mb-3">
      <Button href="/home" id="goback-btn" className="goback p-0 border-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(13, 176, 149)" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </Button>
    </div>
  );

  const renderCheapestFlight = () => {
    if (loading) return <PlaceholderFlight />;

    if (!cheapestFlight) return <p>Nessun volo trovato.</p>;

    return (
      <Card className="border border-1 shadow-lg mb-2">
        <Card.Body>
          {/* Airline info */}
          <div className="top-bar d-flex align-items-end align-items-md-center justify-content-between">
            <div className="air-logo d-flex flex-column flex-md-row align-items-center gap-0 gap-md-3">
              <img src={cheapestFlight?.legs[0]?.carriers.marketing[0].logoUrl} alt="Logo compagnia aerea" />
              <p className="fs-md-5 m-0">{cheapestFlight?.legs[0]?.carriers.marketing[0].name}</p>
            </div>
            <p className="fs-md-5 m-0">Flight Num {cheapestFlight?.legs[0]?.segments[0]?.flightNumber}</p>
          </div>

          {/* Origin and destination */}
          <div className="dep-arr d-flex justify-content-around mt-3">
            <div className="origin d-flex flex-column justify-content-center align-items-center text-center gap-4">
              <p className="m-0 fs-2 fw-bold">{cheapestFlight?.legs[0]?.origin?.id}</p>
              <Card.Text className="fs-md-5">{cheapestFlight?.legs[0]?.origin?.name}</Card.Text>
            </div>
            <div className="destination d-flex flex-column justify-content-center align-items-center gap-4">
              <p className="m-0 fs-2 fw-bold">{cheapestFlight?.legs[0]?.destination?.id}</p>
              <Card.Text className="fs-md-5">{cheapestFlight?.legs[0]?.destination?.name}</Card.Text>
            </div>
          </div>

          {/* Ticket image */}
          <div className="d-flex justify-content-center">
            <img src={ticket} alt="ticket-image" className="w-50" />
          </div>

          {/* Dates and times */}
          <div className="date-time d-flex justify-content-around align-items-center">
            <Card.Text className="d-flex flex-column justify-content-center align-items-center fs-5 gap-2 m-0">
              <p className="fs-md-5 m-0">{formatDate(cheapestFlight?.legs[0]?.departure)}</p>
              <p className="fs-md-5 m-0">{formatTime(cheapestFlight?.legs[0]?.departure)}</p>
            </Card.Text>

            {cheapestFlight?.legs[1] && (
              <Card.Text className="d-flex flex-column justify-content-center align-items-center fs-5 gap-2 m-0">
                <p className="fs-md-5 m-0">{formatDate(cheapestFlight?.legs[1]?.departure)}</p>
                <p className="fs-md-5 m-0">{formatTime(cheapestFlight?.legs[1]?.departure)}</p>
              </Card.Text>
            )}
          </div>

          {/* Price */}
          <Card.Text className="d-flex justify-content-end fs-4">{cheapestFlight?.price?.formatted || JSON.stringify(cheapestFlight?.price)}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const renderHotels = () => {
    if (loadingHotels) return <PlaceholderFlight />;

    if (hotels.length === 0) return <p>Nessun hotel trovato.</p>;

    const hotel = hotels[0];

    return (
      <Row className="hotel-row d-flex flex-column flex-md-row justify-content-between overflow-hidden">
        <Col className="img-container col-12 col-md-5 p-0 h-100">
          <img src={hotel?.images[0]} alt="hotel-image" />
        </Col>
        <Col className="info-container col-12 col-md-7">
          <h2 className="text-center">{hotel?.name}</h2>
          <div className="d-flex justify-content-between px-2">
            <div className="d-flex">
              <p className="m-0 fs-5">{hotel?.stars || "Non classificato"}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(247, 226, 2)" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
            <img src={hotel?.reviewsSummary?.imageUrl || ""} alt="Valutazione" />
          </div>
          <p className="m-0">{hotel?.distance || "Non disponibile"}</p>
          <p className="m-0">{hotel?.cheapestPrice || "Non disponibile"}</p>
        </Col>
      </Row>
    );
  };

  // Render principale
  return (
    <Container className="mt-3">
      {renderBackButton()}

      <h4>Flights Results</h4>
      <div className="mt-3 w-100 w-md-75 m-auto mb-4">{renderCheapestFlight()}</div>

      <h4>Hotels Results</h4>
      <div className="Hotel mt-2 mb-4 border border-1 shadow-lg overflow-hidden">{renderHotels()}</div>
    </Container>
  );
}

export default SearchResults;
