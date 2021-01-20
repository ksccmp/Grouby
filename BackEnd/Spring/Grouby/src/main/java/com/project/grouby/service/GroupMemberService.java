package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.GroupMember;

public interface GroupMemberService {
	
	public int insert(GroupMember groupMember);
	
	public List<GroupMember> selectByGroupId(int groupId);
	
	public int selectMemberCount(int groupId);
	
	public int selectGroupCount(String userId);
	
	public int deleteMember(GroupMember groupMember);
}
