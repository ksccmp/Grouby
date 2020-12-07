package com.project.grouby.repository;

import java.util.List;

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
	
	@Override
	public List<User> selectOthersByUserId(String userId) {
		return session.selectList(ns + "selectOthersByUserId", userId);
	}
	
	@Override
	public List<User> selectFriendsByUserId(String userId) {
		return session.selectList(ns + "selectFriendsByUserId", userId);
	}
}
