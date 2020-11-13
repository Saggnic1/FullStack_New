package com.PatientService.patientService.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import com.PatientService.patientService.entity.ClinicianEntity;


@FeignClient(name="ClinicianService")
public interface IClinicianProxy {
	
	@GetMapping("/api/clinical")
	public ResponseEntity<List<ClinicianEntity>> getAllClinician();

}
