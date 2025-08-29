package com.tariff.app.service;

import com.tariff.app.dto.TariffCalculationRequest;
import com.tariff.app.dto.TariffCalculationResponse;
import com.tariff.app.entity.Tariff;
import com.tariff.app.repository.TariffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TariffService {
    
    @Autowired
    private TariffRepository tariffRepository;
    
    public TariffCalculationResponse calculateTariff(TariffCalculationRequest request) {
        Optional<Tariff> tariffOptional = tariffRepository.findByOriginCountryAndDestinationCountryAndProductCategory(
            request.getOriginCountry(),
            request.getDestinationCountry(),
            request.getProductCategory()
        );
        
        if (tariffOptional.isPresent()) {
            Tariff tariff = tariffOptional.get();
            Double tariffRate = tariff.getRate();
            Double tariffAmount = request.getItemValue() * (tariffRate / 100);
            Double totalCost = request.getItemValue() + tariffAmount;
            
            return new TariffCalculationResponse(
                request.getOriginCountry(),
                request.getDestinationCountry(),
                request.getProductCategory(),
                request.getItemValue(),
                tariffRate,
                tariffAmount,
                totalCost,
                true
            );
        } else {
            // No tariff found, return response with zero tariff
            return new TariffCalculationResponse(
                request.getOriginCountry(),
                request.getDestinationCountry(),
                request.getProductCategory(),
                request.getItemValue(),
                0.0,
                0.0,
                request.getItemValue(),
                false
            );
        }
    }
}

