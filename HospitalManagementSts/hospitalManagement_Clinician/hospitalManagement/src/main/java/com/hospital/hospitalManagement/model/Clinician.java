package com.hospital.hospitalManagement.model;

import javax.validation.constraints.NotNull;

public class Clinician {

	private String id;
	@NotNull
	private String fullName;
	private int age;
	private String gender;
	@NotNull
	private String phoneNumber;
	@NotNull
	private String specialization;
	@NotNull
	private int proficiency;
	@NotNull
	private String address;
	@NotNull
	private String timings;//5f9d2bcf2a79ef6a8106a511

	public Clinician(String fullName, String phoneNumber, String specialization, int proficiency, String address,
			String timings) {
		super();
		this.fullName = fullName;
		this.phoneNumber = phoneNumber;
		this.specialization = specialization;
		this.proficiency = proficiency;
		this.address = address;
		this.timings = timings;
	}
	
	
	public Clinician() {}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getFullName() {
		return fullName;
	}


	public void setFullName(String fullName) {
		this.fullName = fullName;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public String getSpecialization() {
		return specialization;
	}


	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}


	public int getProficiency() {
		return proficiency;
	}


	public void setProficiency(int proficiency) {
		this.proficiency = proficiency;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getTimings() {
		return timings;
	}


	public void setTimings(String timings) {
		this.timings = timings;
	}
	
	
}
