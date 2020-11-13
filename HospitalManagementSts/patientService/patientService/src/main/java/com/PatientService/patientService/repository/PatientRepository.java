package com.PatientService.patientService.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.PatientService.patientService.entity.PatientEntity;

public interface PatientRepository  extends MongoRepository<PatientEntity, Long>{
	
	 List<PatientEntity> findByFullName(String fullName);

}
