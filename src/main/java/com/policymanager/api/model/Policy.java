package com.policymanager.api.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "policy")
public class Policy {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private String category;
	@Column(nullable = false)
	private String startDate;
	@Column(nullable = false)
	private int duration;
	@Column(nullable = false)
	private double initialDeposit;
	@Column(nullable = false)
	private String userType;
	@Column(nullable = false)
	private int termPerYear;
	@Column(nullable = false)
	private double termAmount;
	@Column(nullable = false)
	private double rateOfInterest;
	@Column(nullable = false)
	private double maturityAmount;
	@Column(nullable = false)
	private String status;
@OneToOne
private Vendor vendor;

	

	public Vendor getVendor() {
	return vendor;
}

public void setVendor(Vendor vendor) {
	this.vendor = vendor;
}

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

	@Override
	public String toString() {
		return "Policy [id=" + id + ", name=" + name + ", category=" + category + ", startDate=" + startDate
				+ ", duration=" + duration + ", initialDeposit=" + initialDeposit + ", userType=" + userType
				+ ", termPerYear=" + termPerYear + ", termAmount=" + termAmount + ", rateOfInterest=" + rateOfInterest
				+ ", maturityAmount=" + maturityAmount + ", status=" + status + ", vendor=" + vendor + "]";
	}

	

	

}
