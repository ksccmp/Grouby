package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.User;

public interface UserService {

	public int insert(User user);
	
	public User selectByUserId(String userId);
	
	public List<User> selectOthersByUserId(String userId);
	
	public List<User> selectFriendsByUserId(String userId);
}
