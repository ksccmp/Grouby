package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.GroupMember;

public interface GroupMemberRepository {
	
	public List<GroupMember> selectByGroupId(int groupId);
}
