package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.GroupMember;

@Repository
public class GroupMemberRepositoryImpl implements GroupMemberRepository {
	
	private String ns = "com.project.grouby.groupmembermapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(GroupMember groupMember) {
		return session.insert(ns + "insert", groupMember);
	}
	
	@Override
	public List<GroupMember> selectByGroupId(int groupId) {
		return session.selectList(ns + "selectByGroupId", groupId);
	}
	
	@Override
	public int selectMemberCount(int groupId) {
		return session.selectOne(ns + "selectMemberCount", groupId);
	}
	
	@Override
	public int selectGroupCount(String userId) {
		return session.selectOne(ns + "selectGroupCount", userId);
	}
	
	@Override
	public int deleteMember(GroupMember groupMember) {
		return session.delete(ns + "deleteMember", groupMember);
	}
}
