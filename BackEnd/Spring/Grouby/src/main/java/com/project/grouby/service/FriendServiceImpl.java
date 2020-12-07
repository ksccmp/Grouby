package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.Friend;
import com.project.grouby.repository.FriendRepository;

@Service
public class FriendServiceImpl implements FriendService {
	
	@Autowired
	FriendRepository friendRepo;
	
	@Override
	@Transactional
	public int insert(Friend friend) {
		return friendRepo.insert(friend);
	}
	
	@Override
	public List<Friend> selectByUserId(String userId) {
		return friendRepo.selectByUserId(userId);
	}
	
	@Override
	@Transactional
	public int delete(Friend friend) {
		return friendRepo.delete(friend);
	}
}
