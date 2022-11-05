package com.policymanager.api.controller;

public class UserDto {
	
		private String username;
		private String userType;
		public UserDto(String username, String userType) {
			super();
			this.username = username;
			this.userType = userType;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getUserType() {
			return userType;
		}
		public void setUserType(String userType) {
			this.userType = userType;
		}
		@Override
		public String toString() {
			return "UserDto [username=" + username + ", userType=" + userType + "]";
		}

		
}