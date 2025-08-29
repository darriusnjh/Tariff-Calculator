package com.tariff.app.entity;

import javax.persistence.*;

@Entity
@Table(name = "tariff")
public class Tariff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "origin_country")
    private String originCountry;
    
    @Column(name = "destination_country")
    private String destinationCountry;
    
    @Column(name = "product_category")
    private String productCategory;
    
    @Column(name = "rate")
    private Double rate;
    
    // Default constructor
    public Tariff() {}
    
    // Constructor with parameters
    public Tariff(String originCountry, String destinationCountry, String productCategory, Double rate) {
        this.originCountry = originCountry;
        this.destinationCountry = destinationCountry;
        this.productCategory = productCategory;
        this.rate = rate;
    }
    
    // Getters and setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getOriginCountry() {
        return originCountry;
    }
    
    public void setOriginCountry(String originCountry) {
        this.originCountry = originCountry;
    }
    
    public String getDestinationCountry() {
        return destinationCountry;
    }
    
    public void setDestinationCountry(String destinationCountry) {
        this.destinationCountry = destinationCountry;
    }
    
    public String getProductCategory() {
        return productCategory;
    }
    
    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }
    
    public Double getRate() {
        return rate;
    }
    
    public void setRate(Double rate) {
        this.rate = rate;
    }
}

