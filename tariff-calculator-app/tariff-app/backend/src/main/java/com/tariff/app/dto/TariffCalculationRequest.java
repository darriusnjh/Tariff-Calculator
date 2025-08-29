package com.tariff.app.dto;

public class TariffCalculationRequest {
    private String originCountry;
    private String destinationCountry;
    private String productCategory;
    private Double itemValue;
    
    // Default constructor
    public TariffCalculationRequest() {}
    
    // Constructor with parameters
    public TariffCalculationRequest(String originCountry, String destinationCountry, String productCategory, Double itemValue) {
        this.originCountry = originCountry;
        this.destinationCountry = destinationCountry;
        this.productCategory = productCategory;
        this.itemValue = itemValue;
    }
    
    // Getters and setters
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
    
    public Double getItemValue() {
        return itemValue;
    }
    
    public void setItemValue(Double itemValue) {
        this.itemValue = itemValue;
    }
}

