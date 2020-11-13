package com.hospital.hospitalManagement.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hospital.hospitalManagement.entity.ClinicianEntity;

public interface IClinicianRepository extends MongoRepository<ClinicianEntity, String> {
	
	 List<ClinicianEntity> findByFullName(String fullName);

	List<ClinicianEntity> findBySpecialization(String specialization);

}
