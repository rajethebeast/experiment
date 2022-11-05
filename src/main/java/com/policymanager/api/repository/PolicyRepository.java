package com.policymanager.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.policymanager.api.model.Policy;

public interface PolicyRepository extends JpaRepository<Policy, Long>{

	@Query("select p from Policy p where p.category=?1")
	List<Policy> findByCategory(String category);
	
	@Query("select p from Policy p where p.status=?1")
	List<Policy> findByStatus(String status);
	@Query("select p from Policy p where p.vendor.user.username=?1")
	List<Policy> getPolicyByUsername(String username);
	


	
}
