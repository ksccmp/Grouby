package com.project.grouby.repository;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.Heart;

@Repository
public class HeartRepositoryImpl implements HeartRepository {
	
	private String ns = "com.project.grouby.heartmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(Heart heart) {
		return session.insert(ns + "insert", heart);
	}
	
	@Override
	public int delete(Heart heart) {
		return session.delete(ns + "delete", heart);
	}
}
