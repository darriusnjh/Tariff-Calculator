package com.tariff.app.dto;

public class TariffCalculationResponse {
    private String originCountry;
    private String destinationCountry;
    private String productCategory;
    private Double itemValue;
    private Double tariffRate;
    private Double tariffAmount;
    private Double totalCost;
    private boolean tariffFound;
    
    // Default constructor
    public TariffCalculationResponse() {}
    
    // Constructor with parameters
    public TariffCalculationResponse(String originCountry, String destinationCountry, String productCategory, 
                                   Double itemValue, Double tariffRate, Double tariffAmount, Double totalCost, boolean tariffFound) {
        this.originCountry = originCountry;
        this.destinationCountry = destinationCountry;
        this.productCategory = productCategory;
        this.itemValue = itemValue;
        this.tariffRate = tariffRate;
        this.tariffAmount = tariffAmount;
        this.totalCost = totalCost;
        this.tariffFound = tariffFound;
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
    
    public Double getTariffRate() {
        return tariffRate;
    }
    
    public void setTariffRate(Double tariffRate) {
        this.tariffRate = tariffRate;
    }
    
    public Double getTariffAmount() {
        return tariffAmount;
    }
    
    public void setTariffAmount(Double tariffAmount) {
        this.tariffAmount = tariffAmount;
    }
    
    public Double getTotalCost() {
        return totalCost;
    }
    
    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }
    
    public boolean isTariffFound() {
        return tariffFound;
    }
    
    public void setTariffFound(boolean tariffFound) {
        this.tariffFound = tariffFound;
    }
}

