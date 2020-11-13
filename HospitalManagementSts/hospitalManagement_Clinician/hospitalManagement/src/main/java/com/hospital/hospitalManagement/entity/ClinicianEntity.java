package com.hospital.hospitalManagement.entity;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Clinician")
public class ClinicianEntity {
	
	@Id
	private String id;
	@NotNull
	private String fullName;
	private int age;
	private String gender;
	@NotNull
	@Length(min = 10 ,max = 10)
	private String phoneNumber;
	@NotNull
	private String specialization;
	private int proficiency;
	@NotNull
	private String address;
	@NotNull
	private String timings;
	
	public ClinicianEntity() {}

	public ClinicianEntity(@NotNull String fullName, @NotNull @Length(min = 10, max = 10) String phoneNumber,
			@NotNull String specialization, int proficiency, @NotNull String address, @NotNull String timings) {
		super();
		this.fullName = fullName;
		this.phoneNumber = phoneNumber;
		this.specialization = specialization;
		this.proficiency = proficiency;
		this.address = address;
		this.timings = timings;
	}

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
