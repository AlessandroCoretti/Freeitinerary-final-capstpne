package com.travelfree.freeitinerary.services;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;



@Service
public class SkyScannerService {
    private final String API_HOST = "sky-scanner3.p.rapidapi.com";
    private final String API_KEY = "3e2c2e9da5mshc6dcc5671ed7ae7p1538a3jsn169495aaace";

    public String getAirports(){
        String API_URL = "https://" + API_HOST + "/flights/airports";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-key", API_KEY);
        headers.set("x-rapidapi-host", API_HOST);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                API_URL,
                HttpMethod.GET,
                entity,
                String.class
        );
    return response.getBody();
    }

    public String getFlights(String query){
        String API_URL = "https://" + API_HOST + "/flights/auto-complete?query=" + query;
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-key", API_KEY);
        headers.set("x-rapidapi-host", API_HOST);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                API_URL,
                HttpMethod.GET,
                entity,
                String.class
        );
    return response.getBody();
    }

    public String searchFlight(String from, String to, String departureDate, String returnDate){
        String API_URL = "https://" + API_HOST +"/flights/search-roundtrip?fromEntityId=" + from + "&toEntityId=" + to + "&departDate=" + departureDate + "&returnDate=" + returnDate;

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-key", API_KEY);
        headers.set("x-rapidapi-host", API_HOST);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                API_URL,
                HttpMethod.GET,
                entity,
                String.class
        );
        return response.getBody();
    }

    public String getHotelSuggestions(String query){
        String API_URL = "https://" + API_HOST + "/hotels/auto-complete?query=" + query;

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-key", API_KEY);
        headers.set("x-rapidapi-host", API_HOST);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                API_URL,
                HttpMethod.GET,
                entity,
                String.class
        );
        return response.getBody();
    }
    public String searchHotels(String entityId, String checkInDate, String checkOutDate) {
        String API_URL = "https://" + API_HOST + "/hotels/search?entityId=" + entityId + "&checkin=" + checkInDate + "&checkout=" + checkOutDate;

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-key", API_KEY);
        headers.set("x-rapidapi-host", API_HOST);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                API_URL,
                HttpMethod.GET,
                entity,
                String.class
        );
        return response.getBody();
    }
}
