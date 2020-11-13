package com.PatientService.patientService.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.PatientService.patientService.entity.ClinicianEntity;
import com.PatientService.patientService.entity.PatientEntity;
import com.PatientService.patientService.feign.IClinicianProxy;
import com.PatientService.patientService.model.Patient;
import com.PatientService.patientService.repository.PatientRepository;
import com.mongodb.MongoException;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepo;
	
	@Autowired
	private IClinicianProxy clinicianProxy; 

	public PatientEntity savePatient(Patient patient) {
		PatientEntity entity = new PatientEntity();
		if (!ObjectUtils.isEmpty(patient)) {
			if (!ObjectUtils.isEmpty(patient.getId())) {
				entity.setId(patient.getId());
			}
			entity.setAddress(patient.getAddress());
			entity.setAge(patient.getAge());
			entity.setFullName(patient.getFullName());
			entity.setGender(patient.getGender());
			entity.setPhoneNumber(patient.getPhoneNumber());
			entity.setOccupation(patient.getOccupation());
			entity.setClinician(patient.getClinician());

			try {
				return patientRepo.save(entity);

			} catch (Exception ex) {

				throw new MongoException("Error while persisting patient's details");
			}
		}

		return null;
	}

	public Optional<PatientEntity> findById(long id) {
		if (!ObjectUtils.isEmpty(id)) {
			return patientRepo.findById(id);

		}
		return Optional.empty();
	}

	public List<PatientEntity> fetchAllPatient(List<PatientEntity> patients) {
		patientRepo.findAll().forEach(patients::add);
		return patients;
	}

	public void deleteById(long id) {
		patientRepo.deleteById(id);
		
	}

	public List<String> fetchAllClinician() {
		
		ResponseEntity<List<ClinicianEntity>> response=clinicianProxy.getAllClinician();
		if(!ObjectUtils.isEmpty(response) && !ObjectUtils.isEmpty(response.getBody())) {
			return response.getBody().stream()
					.map(body->body.getFullName()).collect(Collectors.toList());
		}
		
		return new ArrayList<>();
	}

}
