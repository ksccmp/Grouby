package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.Group;
import com.project.grouby.repository.GroupRepository;

@Service
public class GroupServiceImpl implements GroupService {
	
	@Autowired
	GroupRepository groupRepo;
	
	@Override
	@Transactional
	public int insert(Group group) {
		return groupRepo.insert(group);
	}
	
	@Override
	public List<Group> selectByUserId(String userId) {
		return groupRepo.selectByUserId(userId);
	}
}
