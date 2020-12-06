package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.grouby.dto.Group;
import com.project.grouby.repository.GroupRepository;

@Service
public class GroupServiceImpl implements GroupService {
	
	@Autowired
	GroupRepository groupRepo;
	
	@Override
	public List<Group> selectByUserId(String userId) {
		return groupRepo.selectByUserId(userId);
	}
}
