package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.GroupMember;

public interface GroupMemberService {
	
	public List<GroupMember> selectByGroupId(int groupId);
}
