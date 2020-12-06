package com.project.grouby.repository;

import com.project.grouby.dto.User;

public interface UserRepository {
	
	public int insert(User user);
	
	public User selectByUserId(String userId);
}
