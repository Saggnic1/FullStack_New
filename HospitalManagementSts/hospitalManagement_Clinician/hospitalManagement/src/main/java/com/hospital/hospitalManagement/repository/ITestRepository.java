package com.hospital.hospitalManagement.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hospital.hospitalManagement.entity.TestDb;

//@Repository
public interface ITestRepository extends MongoRepository<TestDb, String> {
	  List<TestDb> findByTitleContaining(String title);
	  List<TestDb> findByPublished(boolean published);
	

	
}
