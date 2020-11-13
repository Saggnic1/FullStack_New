package com.PatientService.patientService.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.PatientService.patientService.entity.PatientEntity;
import com.PatientService.patientService.model.Patient;
import com.PatientService.patientService.service.PatientService;

@CrossOrigin
@RestController
@RequestMapping("/api/patient")
public class PatientController {

	@Autowired
	private PatientService patientService;
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(PatientController.class);

	@PostMapping("/savePatient")
	public ResponseEntity<PatientEntity> savePatient(@RequestBody Patient patient) {
		try {
			PatientEntity entity = patientService.savePatient(patient);

			return new ResponseEntity<>(entity, HttpStatus.CREATED);

		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getPatientById/{id}")
	public ResponseEntity<PatientEntity> getPatientById(@PathVariable("id") long id) {
		try {
			Optional<PatientEntity> data = patientService.findById(id);

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

	@GetMapping("/getAllPatients")
	public ResponseEntity<List<PatientEntity>> getAllPatients() {
		try {
			List<PatientEntity> patients = new ArrayList<>();

			patients = patientService.fetchAllPatient(patients);

			if (patients.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(patients, HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getAllClinicianForPatient")
	public ResponseEntity<List<String>> getAllCliniciansForPatient() {
		try {

			List<String> patients = patientService.fetchAllClinician();

			if (patients.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(patients, HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/patientsToBeDeleted/{id}")
	public ResponseEntity<HttpStatus> deletePatient(@PathVariable("id") long id) {
		try {
			patientService.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
