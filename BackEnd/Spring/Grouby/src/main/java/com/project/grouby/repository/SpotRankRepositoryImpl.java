package com.project.grouby.repository;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.SpotRank;

@Repository
public class SpotRankRepositoryImpl implements SpotRankRepository {
	private String ns = "com.project.grouby.spotrankmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(SpotRank spotRank) {
		return session.insert(ns + "insert", spotRank);
	}
}
