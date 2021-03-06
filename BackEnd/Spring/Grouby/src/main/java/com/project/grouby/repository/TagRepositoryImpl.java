package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.Tag;

@Repository
public class TagRepositoryImpl implements TagRepository {
	private String ns = "com.project.grouby.tagmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(Tag tag) {
		return session.insert(ns + "insert", tag);
	}
	
	@Override
	public List<Tag> selectBySpotId(int spotId) {
		return session.selectList(ns + "selectBySpotId", spotId);
	}
}
