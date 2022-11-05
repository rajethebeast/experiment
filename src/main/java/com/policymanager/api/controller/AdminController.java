package com.policymanager.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.policymanager.api.model.Admin;
import com.policymanager.api.model.Customer;
import com.policymanager.api.model.Policy;
import com.policymanager.api.model.User;
import com.policymanager.api.model.Vendor;
import com.policymanager.api.repository.UserRepository;
import com.policymanager.api.service.AdminService;
import com.policymanager.api.service.CustomerService;
import com.policymanager.api.service.PolicyService;
import com.policymanager.api.service.VendorService;

@RestController
public class AdminController {
	@Autowired
	private AdminService adminService;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/admin/add")
	public Admin addAdmin(@RequestBody Admin admin) {
		User user = admin.getUser();
		if (user == null) {
			throw new RuntimeException("User Data not present");
		}
		user.setUserType("ADMIN");
		String encryptedPassword = passwordEncoder.encode(user.getPassword());

		user.setPassword(encryptedPassword);
		user = userRepository.save(user);
		admin.setUser(user);
		return adminService.addAdmin(admin);
	}

	@GetMapping("/admin/all")
	public List<Admin> getAllCustomer() {
		return adminService.getAllAdmins();
	}
	@DeleteMapping("/admin/delete")
	public void deleteAdminById(@RequestParam("id") Long id) {
		adminService.deleteAdminById(id);
	}

	/*-------------VENDOR CONFIGURATION----------------*/

	@Autowired
	private VendorService vendorService;
	
	@PostMapping("/admin/vendor/add")
	public Vendor addVendor(@RequestBody Vendor vendor) {
		return vendorService.addVendor(vendor);
	}

	@GetMapping("/admin/vendor/all")
	public List<Vendor> getAllVendor() {
		return vendorService.getAllVendors();
	}
	@DeleteMapping("/admin/vendor/delete")
	public void deleteVendorById(@RequestParam("id") Long id) {
		vendorService.deleteVendorById(id);
	}

	/*----------------CUSTOMER CONFIGURATION----------------*/
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/admin/customer/add")
	public Customer addCustomer(@RequestBody Customer customer) {
		return customerService.addCustomer(customer);
	}

	@GetMapping("/admin/customer/all")
	public List<Customer> getAllCustomers() {
		return customerService.getAllCustomers();
	}

	@PutMapping("/admin/customer/edit/{id}")
	public Customer editCustomer(@PathVariable("id") Long id, @RequestBody Customer customerNew) {
		Customer customerDB = customerService.getCustomerById(id);
		if (customerDB == null)
			throw new RuntimeException("Invalid ID");

		customerDB.setFirstName(customerNew.getFirstName());
		customerDB.setLastName(customerNew.getLastName());
		customerDB.setDob(customerNew.getDob());
		customerDB.setAddress(customerNew.getAddress());
		customerDB.setSalary(customerNew.getSalary());
		customerDB.setContactNo(customerNew.getContactNo());
		customerDB.setPanNo(customerNew.getPanNo());
		customerDB.setEmail(customerNew.getEmail());
		customerDB.setEmployerName(customerNew.getEmployerName());
		customerDB.setEmployerType(customerNew.getEmployerType());

		customerDB = customerService.addCustomer(customerDB);
		return customerDB;
	}
	
	@DeleteMapping("/admin/customer/delete")
	public void deleteCustomerById(@RequestParam("id") Long id) {
		customerService.deleteCustomerById(id);
	}
	@Autowired
	private PolicyService policyService;
	
	
	@PutMapping("/admin/policy/status/{pid}")
	public Policy editPolicyStatus(@PathVariable("pid") Long pid, @RequestBody Policy policyNew) {
		Policy policyDB = policyService.getPolicyById(pid);
		if (policyDB == null)
			throw new RuntimeException("Invalid policy ID");

		policyDB.setStatus(policyNew.getStatus());
		
		policyDB = policyService.addPolicy(policyDB);
		return policyDB;
	}
	
	@GetMapping("/admin/policy")
	public List<Policy> getPolicyByStatus(@RequestParam ("status") String status){
		
		return policyService.getPolicyByStatus(status);}
		
}
