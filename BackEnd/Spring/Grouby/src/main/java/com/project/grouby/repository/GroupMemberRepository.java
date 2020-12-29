package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.GroupMember;

public interface GroupMemberRepository {
	
	public int insert(GroupMember groupMember);
	
	public List<GroupMember> selectByGroupId(int groupId);
	
	public int selectMemberCount(int groupId);
	
	public int deleteMember(String userId);
}
