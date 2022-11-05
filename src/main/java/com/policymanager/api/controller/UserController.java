package com.policymanager.api.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.policymanager.api.model.Customer;
import com.policymanager.api.model.User;
import com.policymanager.api.model.Vendor;
import com.policymanager.api.repository.AdminRepository;
import com.policymanager.api.repository.CustomerRepository;
import com.policymanager.api.repository.UserRepository;
import com.policymanager.api.repository.VendorRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:9213"})
public class UserController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private VendorRepository vendorRepository; 
	@Autowired
	private AdminRepository adminRepository;
	
	 
	@GetMapping("/user/login") //<-- authenticated in security config
	public Object userLogin(Principal principal) { //<-- DI
		//At this line spring already has username and password of the user.
		
		/* Read the username from spring using Principal */
		String username = principal.getName();
		
		/* fetch user details on the basis of this username */
		User user = userRepository.findByUsername(username);
		
		UserDto dto = new UserDto(user.getUsername(),user.getUserType());
		System.out.println(dto);
		return dto; 
	}
	
	@GetMapping("/user/details")
	public Object getUserDetails(Principal principal) {
		//At this line spring already has username of the user.
		
		/* Read the username from spring using Principal */
		String username = principal.getName();
		
		/* fetch user details on the basis of this username */
		User user = userRepository.findByUsername(username);
		
		if(user.getUserType().equalsIgnoreCase("CUSTOMER")) {
			Customer customer = customerRepository.getCustomerDetails(username);
			CustomerDto dto = new CustomerDto(customer.getId(),
											  customer.getFirstName(),
											  customer.getLastName(),
											  username);
			
			return dto; 
		}
		if(user.getUserType().equalsIgnoreCase("VENDOR")) {
			Vendor vendor = vendorRepository.getVendorDetails(username);
			VendorDto dto = new VendorDto(vendor.getId(),
					vendor.getName(),
					  username);
			return dto;
		}
		if(user.getUserType().equalsIgnoreCase("ADMIN")) {
			
		}
		return null;
	}
}
