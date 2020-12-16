package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.RankComp;

@Repository
public class RankCompRepositoryImpl implements RankCompRepository {
	private String ns = "com.project.grouby.rankcompmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public List<RankComp> selectAll() {
		return session.selectList(ns + "selectAll");
	}
	
	@Override
	public List<RankComp> selectAllByGroupId(int groupId) {
		return session.selectList(ns + "selectAllByGroupId", groupId);
	}
}
