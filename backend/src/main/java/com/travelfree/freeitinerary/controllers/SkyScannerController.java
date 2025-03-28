package com.travelfree.freeitinerary.controllers;

import com.travelfree.freeitinerary.services.SkyScannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SkyScannerController {

    @Autowired
    private SkyScannerService skyScannerService;

    @GetMapping("/api/airports")
    public String getAirports(){
        return skyScannerService.getAirports();
    }

    @GetMapping("/api/flight-suggestions")
    public String getFlights(@RequestParam String query){
        return skyScannerService.getFlights(query);
    }

    @GetMapping("/api/flights/search")
    public String searchFlights(
            @RequestParam String from,
            @RequestParam String to,
            @RequestParam String departureDate,
            @RequestParam String returnDate
    ){
        return skyScannerService.searchFlight(from, to, departureDate, returnDate);
    }

    @GetMapping("/api/hotels/auto-complete")
    public String getHotelSuggestions(@RequestParam String query){
        return skyScannerService.getHotelSuggestions(query);
    }

    @GetMapping("/api/hotels/search")
    public String searchHotels(
            @RequestParam String entityId,
            @RequestParam String checkInDate,
            @RequestParam String checkOutDate
    ){
        return skyScannerService.searchHotels(entityId,checkInDate,checkOutDate);
    };
}
