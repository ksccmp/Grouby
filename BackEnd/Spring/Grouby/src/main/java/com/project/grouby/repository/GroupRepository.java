package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.Group;

public interface GroupRepository {
	
	public int insert(Group group);
	
	public List<Group> selectByUserId(String userId);
	
	public int updateGroupName(Group group);
}
