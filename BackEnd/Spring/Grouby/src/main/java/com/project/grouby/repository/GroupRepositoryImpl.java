package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.Group;

@Repository
public class GroupRepositoryImpl implements GroupRepository {
	
	private String ns = "com.project.grouby.groupmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public List<Group> selectByUserId(String userId) {
		return session.selectList(ns + "selectByUserId", userId);
	}
}
