package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.Friend;

@Repository
public class FriendRepositoryImpl implements FriendRepository {
	
	private String ns = "com.project.grouby.friendmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(Friend friend) {
		return session.insert(ns + "insert", friend);
	}
	
	@Override
	public List<Friend> selectByUserId(String userId) {
		return session.selectList(ns + "selectByUserId", userId);
	}
	
	@Override
	public int delete(Friend friend) {
		return session.delete(ns + "delete", friend);
	}
}
