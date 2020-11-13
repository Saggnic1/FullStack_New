package com.PatientService.patientService.entity;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Patient")
public class PatientEntity {
	@Id
	private Long id;
	@NotNull
	private String fullName;
	private int age;
	private String gender;
	@NotNull
	@Length(min = 10 ,max = 10)
	private String phoneNumber;
	private String occupation;
	@NotNull
	private String address;
	@NotNull
	private String clinician;


	public PatientEntity() {}


	public PatientEntity(@NotNull String fullName, @NotNull @Length(min = 10, max = 10) String phoneNumber,
			@NotNull String address) {
		super();
		this.fullName = fullName;
		this.phoneNumber = phoneNumber;
		this.address = address;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
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


	public String getOccupation() {
		return occupation;
	}


	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getClinician() {
		return clinician;
	}

	public void setClinician(String clinician) {
		this.clinician = clinician;
	}
	
	
}
