package com.policymanager.api.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;

import com.policymanager.api.model.Policy;

public class ResPolicyDto {
	private Long id;

	private String name;

	private String category;

	private String startDate;

	private int duration;

	private double initialDeposit;

	private String userType;

	private int termPerYear;

	private double termAmount;

	private double rateOfInterest;

	private double maturityAmount;

	private String status;
	private String vendorName;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public double getInitialDeposit() {
		return initialDeposit;
	}
	public void setInitialDeposit(double initialDeposit) {
		this.initialDeposit = initialDeposit;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public int getTermPerYear() {
		return termPerYear;
	}
	public void setTermPerYear(int termPerYear) {
		this.termPerYear = termPerYear;
	}
	public double getTermAmount() {
		return termAmount;
	}
	public void setTermAmount(double termAmount) {
		this.termAmount = termAmount;
	}
	public double getRateOfInterest() {
		return rateOfInterest;
	}
	public void setRateOfInterest(double rateOfInterest) {
		this.rateOfInterest = rateOfInterest;
	}
	public double getMaturityAmount() {
		return maturityAmount;
	}
	public void setMaturityAmount(double maturityAmount) {
		this.maturityAmount = maturityAmount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	@Override
	public String toString() {
		return "ResPolicyDto [id=" + id + ", name=" + name + ", category=" + category + ", startDate=" + startDate
				+ ", duration=" + duration + ", initialDeposit=" + initialDeposit + ", userType=" + userType
				+ ", termPerYear=" + termPerYear + ", termAmount=" + termAmount + ", rateOfInterest=" + rateOfInterest
				+ ", maturityAmount=" + maturityAmount + ", status=" + status + ", vendorName=" + vendorName + "]";
	}
	public static List<ResPolicyDto> convertToDto(List<Policy> list) {
		List<ResPolicyDto> listDto = new ArrayList<>();
		for(Policy l : list) {
			ResPolicyDto dto = new ResPolicyDto();
			dto.setId(l.getId());
			dto.setName(l.getName());
			dto.setCategory(l.getCategory());
			dto.setDuration(l.getDuration());
			dto.setInitialDeposit(l.getInitialDeposit());
			dto.setMaturityAmount(l.getMaturityAmount());
			dto.setRateOfInterest(l.getRateOfInterest());
			dto.setStartDate(l.getStartDate());
			dto.setTermAmount(l.getTermAmount());
			dto.setTermPerYear(l.getTermPerYear());
			dto.setStatus(l.getStatus());
			dto.setUserType(l.getUserType());
			dto.setVendorName(l.getVendor().getName());
			listDto.add(dto);
		}
		
		return listDto;
	}
	
}
