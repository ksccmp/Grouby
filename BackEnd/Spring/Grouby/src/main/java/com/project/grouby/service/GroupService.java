package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Group;

public interface GroupService {
	
	public List<Group> selectByUserId(String userId);
}