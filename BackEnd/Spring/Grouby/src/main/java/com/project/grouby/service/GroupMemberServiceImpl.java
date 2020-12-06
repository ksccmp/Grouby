package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.grouby.dto.GroupMember;
import com.project.grouby.repository.GroupMemberRepository;

@Service
public class GroupMemberServiceImpl implements GroupMemberService {
	
	@Autowired
	GroupMemberRepository groupMemberRepo;
	
	@Override
	public List<GroupMember> selectByGroupId(int groupId) {
		return groupMemberRepo.selectByGroupId(groupId);
	}
}
