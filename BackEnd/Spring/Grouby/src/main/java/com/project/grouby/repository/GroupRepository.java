package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.Group;

public interface GroupRepository {
	
	public List<Group> selectByUserId(String userId);
}
