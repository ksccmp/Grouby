package com.project.grouby.service;

import com.project.grouby.dto.User;

public interface UserService {

	public int insert(User user);
	
	public User selectByUserId(String userId);
}
