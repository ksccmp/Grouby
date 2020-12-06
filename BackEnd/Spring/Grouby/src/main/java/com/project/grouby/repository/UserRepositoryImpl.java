package com.project.grouby.repository;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.User;

@Repository
public class UserRepositoryImpl implements UserRepository {
	
	private String ns = "com.project.grouby.usermapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(User user) {
		return session.insert(ns + "insert", user);
	}
	
	@Override
	public User selectByUserId(String userId) {
		return session.selectOne(ns + "selectByUserId", userId);
	}
}
