package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.User;
import com.project.grouby.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepo;
	
	@Override
	@Transactional
	public int insert(User user) {
		return userRepo.insert(user);
	}
	
	@Override
	public User selectByUserId(String userId) {
		return userRepo.selectByUserId(userId);
	}
	
	@Override
	public List<User> selectOthersByUserId(String userId) {
		return userRepo.selectOthersByUserId(userId);
	}
	
	@Override
	public List<User> selectFriendsByUserId(String userId) {
		return userRepo.selectFriendsByUserId(userId);
	}
}
