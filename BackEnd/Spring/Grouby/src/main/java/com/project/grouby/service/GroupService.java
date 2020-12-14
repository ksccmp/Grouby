package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Group;

public interface GroupService {
	
	public int insert(Group group);
	
	public List<Group> selectByUserId(String userId);
}
