package com.tariff.app.repository;

import com.tariff.app.entity.Tariff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TariffRepository extends JpaRepository<Tariff, Long> {
    
    @Query("SELECT t FROM Tariff t WHERE t.originCountry = :originCountry AND t.destinationCountry = :destinationCountry AND t.productCategory = :productCategory")
    Optional<Tariff> findByOriginCountryAndDestinationCountryAndProductCategory(
        @Param("originCountry") String originCountry,
        @Param("destinationCountry") String destinationCountry,
        @Param("productCategory") String productCategory
    );
}

