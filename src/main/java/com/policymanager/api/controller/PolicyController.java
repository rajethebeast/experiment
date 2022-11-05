package com.policymanager.api.controller;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.policymanager.api.dto.ResPolicyDto;
import com.policymanager.api.model.Policy;
import com.policymanager.api.model.Vendor;
import com.policymanager.api.repository.PolicyRepository;
import com.policymanager.api.repository.VendorRepository;
import com.policymanager.api.service.PolicyService;

@RestController
@CrossOrigin(origins = { "http://localhost:9213" })
public class PolicyController {
	@Autowired
	private PolicyService policyService;
	@Autowired
	private PolicyRepository policyRepository;
	@Autowired
	private VendorRepository vendorRepository;
	
	@PostMapping("/policy/addpolicy")
	public Policy addPolicy(@RequestBody Policy policy) {
		return policyService.addPolicy(policy);
	}

	@GetMapping("/policy/allavail")
	public List<Policy> getAllPolicies() {
		return policyService.getAllPolicies();
	}
	/*policy with category*/
	@GetMapping("/policy/category")
	public List<Policy> getPolicyByCategory(@RequestParam ("category") String category){
		
		return policyService.getPolicyByCategory(category);
	}
	
	@GetMapping("/policy/all")
	public List<ResPolicyDto> getAllPolicy(Principal principal) {
		String username = principal.getName();	
		List<Policy> list = policyRepository.getPolicyByUsername(username);
		List<ResPolicyDto> listDto = ResPolicyDto.convertToDto(list);
		return listDto;  
	}
	
	
	@PostMapping("/policy/add")
	public void postPolicy(@RequestBody Policy policy, Principal principal) {
		String username = principal.getName();
		/* Fetch employee by username */
		Vendor vendor = vendorRepository.getVendorByUsername(username);
		
		/* Set other properties of leave model */
		
		policy.setVendor(vendor);
		policyRepository.save(policy);
	}
}	 












