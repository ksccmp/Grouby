package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.User;

public interface UserRepository {
	
	public int insert(User user);
	
	public User selectByUserId(String userId);
	
	public List<User> selectOthersByUserId(String userId);
	
	public List<User> selectFriendsByUserId(String userId);
}
