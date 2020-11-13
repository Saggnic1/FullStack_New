package com.hospital.hospitalManagement.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hospital.hospitalManagement.entity.ClinicianEntity;
import com.hospital.hospitalManagement.model.Clinician;
import com.hospital.hospitalManagement.service.ClinicianService;

//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin
@RestController
@RequestMapping("/api")
public class ClinicianController {

	@Autowired
	private ClinicianService clinicianService;
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(ClinicianController.class);

	@PostMapping("/clinician")
	public ResponseEntity<ClinicianEntity> saveClinician(@RequestBody Clinician clinician) {
		try {
			ClinicianEntity entity = clinicianService.saveClinician(clinician);
			return new ResponseEntity<>(entity, HttpStatus.CREATED);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/clinician/{id}")
	public ResponseEntity<ClinicianEntity> getClinicianById(@PathVariable("id") String id) {

		try {
			Optional<ClinicianEntity> data = clinicianService.findById(id);

			if (data.isPresent()) {
				return new ResponseEntity<>(data.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/clinician/specialization/{specialization}")
	public ResponseEntity<List<ClinicianEntity>> getClinicianByProficiency(
			@PathVariable("specialization") String specialization) {
		try {
			
			List<ClinicianEntity> data = new ArrayList<>();
			
			if(specialization.equalsIgnoreCase("all")){
				data= clinicianService.fetchAllClinician(data);
			}
			else {
			 data = clinicianService.findBySpecialization(specialization);
			}

			if (!ObjectUtils.isEmpty(data)) {
				return new ResponseEntity<>(data, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/clinical")
	public ResponseEntity<List<ClinicianEntity>> getAllClinician() {
		try {
			List<ClinicianEntity> clinician = new ArrayList<>();

			clinician = clinicianService.fetchAllClinician(clinician);

			if (clinician.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(clinician, HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/clinical/{id}")
	public ResponseEntity<HttpStatus> deleteClinician(@PathVariable("id") String id) {
		try {
			clinicianService.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
