package com.policymanager.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.policymanager.api.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

}
