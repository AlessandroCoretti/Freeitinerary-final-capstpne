import { Autocomplete, Box, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/FlightSearch.css";

function FlightSearch() {
  const [airports, setAirports] = useState([]);
  const [fromIata, setFromIata] = useState("");
  const [toIata, setToIata] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  // Fetch degli aeroporti
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/airports`)
      .then((response) => response.json())
      .then((data) => setAirports(data.data))
      .catch((error) => console.error("Errore durante il recupero degli aeroporti:", error));
  }, []);
  console.log(`${import.meta.env.VITE_API_URL}`);

  const searchFlightsAndHotels = async () => {
    if (!fromIata || !toIata || !departureDate) {
      alert("Compila tutti i campi obbligatori (partenza, destinazione e data di partenza).");
      return;
    }

    try {
      // Recupera l'entityId dall'API di auto-completamento
      const autoCompleteUrl = `${import.meta.env.VITE_API_URL}/hotels/auto-complete?query=${toIata}`;
      const response = await fetch(autoCompleteUrl);

      if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Risultati auto-complete API:", data); // Debug

      if (data.data && data.data.length > 0) {
        const entityId = data.data[0].entityId; // Recupera il primo entityId
        console.log("Entity ID trovato:", entityId);

        // Naviga e passa i parametri
        navigate("/results", {
          state: {
            fromIata,
            toIata,
            departureDate,
            returnDate,
            entityId,
          },
        });

        // Ricerca voli
        const flightUrl = `${import.meta.env.VITE_API_URL}/flights/search?from=${fromIata}&to=${toIata}&departureDate=${departureDate}${
          returnDate ? `&returnDate=${returnDate}` : ""
        }`;

        fetch(flightUrl)
          .then((response) => response.json())
          .then((data) => {
            setFlights(data.data || []);
            console.log("Risultati dei voli:", data);
          })
          .catch((error) => console.error("Errore durante il recupero dei voli:", error));

        // Ricerca hotel
        const hotelUrl = `${import.meta.env.VITE_API_URL}/hotels/search?entityId=${entityId}&checkInDate=${departureDate}&checkOutDate=${
          returnDate || departureDate
        }`;

        fetch(hotelUrl)
          .then((response) => response.json())
          .then((data) => {
            setHotels(data.results || []);
            console.log("Risultati degli hotel:", data);
          })
          .catch((error) => console.error("Errore durante il recupero degli hotel:", error));
      } else {
        alert("Impossibile trovare l'entityId per la destinazione specificata.");
        return;
      }
    } catch (error) {
      console.error("Errore durante il fetch dell'entityId o la ricerca:", error);
    }
  };

  return (
    <Box
      component="form"
      className="d-flex flex-column flex-md-row w-100 align-items-center justify-content-between"
      sx={{ "& > :not(style)": { m: 1, width: "300px" } }}
      noValidate
      autoComplete="on"
    >
      {/* Selezione aeroporto di partenza */}
      <Autocomplete
        options={airports}
        getOptionLabel={(option) => ` ${option.name} (${option.iata})`}
        renderInput={(params) => <TextField {...params} label="From your life" variant="outlined" />}
        onChange={(event, newValue) => setFromIata(newValue?.iata || "")}
        required
      />

      {/* Selezione aeroporto di destinazione */}
      <Autocomplete
        options={airports}
        getOptionLabel={(option) => ` ${option.name} (${option.iata})`}
        renderInput={(params) => <TextField {...params} label="To your dream" variant="outlined" />}
        onChange={(event, newValue) => setToIata(newValue?.iata || "")}
        required
      />

      {/* Input data di partenza */}
      <TextField label="" type="date" onChange={(e) => setDepartureDate(e.target.value)} required />

      {/* Input data di ritorno */}
      <TextField label="" type="date" onChange={(e) => setReturnDate(e.target.value)} />

      {/* Pulsante per cercare voli e hotel */}
      <Button variant="contained" className="px-1 py-1" color="primary" onClick={searchFlightsAndHotels}>
        Search your adventure
      </Button>

      {/* Risultati dei voli */}
      {flights.length > 0 && (
        <Box>
          <h3>Risultati dei Voli:</h3>
          <ul>
            {flights.map((flight, index) => (
              <li key={index}>
                Da: {flight.origin.name} ({flight.origin.displayCode}) - A: {flight.destination.name} ({flight.destination.displayCode})<br />
                Partenza: {flight.departure}, Arrivo: {flight.arrival}
                <br />
                Prezzo: {flight.price.formatted}
              </li>
            ))}
          </ul>
        </Box>
      )}

      {/* Risultati degli hotel */}
      {hotels.length > 0 && (
        <Box>
          <h3>Risultati degli Hotel:</h3>
          <ul>
            {hotels.map((hotel, index) => (
              <li key={index}>
                <strong>{hotel.name}</strong>
                <br />
                Prezzo: {hotel.price || "Non disponibile"}
                <br />
                Dettagli: {hotel.searchSummary?.resultsSummary || "Nessun riepilogo disponibile"}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
}

export default FlightSearch;
