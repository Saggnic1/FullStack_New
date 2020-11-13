package com.hospital.hospitalManagement.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import com.hospital.hospitalManagement.entity.ClinicianEntity;
import com.hospital.hospitalManagement.model.Clinician;
import com.hospital.hospitalManagement.repository.IClinicianRepository;
import com.mongodb.MongoException;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ClinicianService {

	@Autowired
	private IClinicianRepository clinicianRepo;
	
	private static final org.slf4j.Logger log = 
		    org.slf4j.LoggerFactory.getLogger(ClinicianService.class);

	public ClinicianService() {
		/*
		 * 
		 */
	}

	public ClinicianEntity saveClinician(Clinician clinician) {

		ClinicianEntity entity = new ClinicianEntity();
		if (!ObjectUtils.isEmpty(clinician)) {
			if (!ObjectUtils.isEmpty(clinician.getId())) {
				entity.setId(clinician.getId());
			}
			entity.setAddress(clinician.getAddress());
			entity.setAge(clinician.getAge());
			entity.setFullName(clinician.getFullName());
			entity.setGender(clinician.getGender());
			entity.setPhoneNumber(clinician.getPhoneNumber());
			entity.setProficiency(clinician.getProficiency());
			entity.setSpecialization(clinician.getSpecialization());
			entity.setTimings(clinician.getTimings());

			try {
				return clinicianRepo.save(entity);

			} catch (Exception ex) {

				log.info(ex.getMessage());
				throw new MongoException("Error while persisting Doctor's details");
			}
		}

		return null;
	}

	public Optional<ClinicianEntity> findById(String id) {
		if (!ObjectUtils.isEmpty(id)) {
			return clinicianRepo.findById(id);
			
		}
		return null;
	}

	public List<ClinicianEntity> fetchAllClinician(List<ClinicianEntity> clinician) {

		clinicianRepo.findAll().forEach(clinician::add);
		return clinician;
	}

	public void deleteById(String id) {
		clinicianRepo.deleteById(id);
	}

	public List<ClinicianEntity> findBySpecialization(String specialization) {
		if (!ObjectUtils.isEmpty(specialization)) {
			return clinicianRepo.findBySpecialization(specialization);
			
		}
		return new ArrayList<>();
	}

}
