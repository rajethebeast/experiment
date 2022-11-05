package com.policymanager.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.policymanager.api.dto.ResponseDto;
import com.policymanager.api.model.Customer;
import com.policymanager.api.model.Policy;
import com.policymanager.api.model.User;
import com.policymanager.api.model.Vendor;
import com.policymanager.api.repository.CustomerRepository;
import com.policymanager.api.repository.PolicyRepository;
import com.policymanager.api.repository.UserRepository;
import com.policymanager.api.service.CustomerService;
import com.policymanager.api.service.PolicyService;

@RestController
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private PolicyRepository policyRepository;
	@Autowired
	private PolicyService policyService;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private ResponseDto response;

	@PostMapping("/customer/add")
	public  ResponseEntity<Object> addCustomer(@RequestBody Customer customer) {
		User user = customer.getUser();
		if (user == null) {
			return ResponseEntity.status(400).body("User Data Not Present");
		}
		user.setUserType("CUSTOMER");
		String encryptedPassword = passwordEncoder.encode(user.getPassword());

		user.setPassword(encryptedPassword);
		user = userRepository.save(user);
		customer.setUser(user);
		response.setMsg("Sign Up Success");
		return ResponseEntity.status(HttpStatus.OK).body(response);
	}
	@GetMapping("/customer/all")
	public List<Customer> getAllCustomers() {
		return customerService.getAllCustomers();
	}

	@PutMapping("/customer/edit/{id}")
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

	/* Policy */
	@GetMapping("/customer/policy/{cid}/{pid}")
	public Customer buyPolicy(@PathVariable("cid") Long cid, @PathVariable("pid") Long pid) {
		/* fetch the customer details */
		Optional<Customer> optionalC = customerRepository.findById(cid);
		if (!optionalC.isPresent())
			throw new RuntimeException("Customer ID Invalid");
		Customer customer = optionalC.get();

		/* fetch the policy details */
		Optional<Policy> optionalP = policyRepository.findById(pid);
		if (!optionalP.isPresent())
			throw new RuntimeException("Policy ID Invalid");
		Policy policy = optionalP.get();

		/* Attach the policy to customer */
		List<Policy> list = customer.getPolicy(); // list of policies that customer has
		list.add(policy); // add new policy to the list
		customer.setPolicy(list); // attach the updated list to customer

		/* save the customer as its policies have been updated */
		return customerRepository.save(customer);

	}
	@GetMapping("/policy/customer/{cid}")
	public List<Policy> getCustomerById(@PathVariable("cid") Long cid){
		Customer customer =  customerService.getCustomerById(cid);
		if(customer == null)
				throw new RuntimeException("Invalid Customer ID");
		List<Policy> list = customer.getPolicy();
		return list;
		
	}

}
