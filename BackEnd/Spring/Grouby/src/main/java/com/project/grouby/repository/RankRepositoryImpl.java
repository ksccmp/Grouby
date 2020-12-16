package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.Rank;

@Repository
public class RankRepositoryImpl implements RankRepository {
	private String ns = "com.project.grouby.rankmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(Rank rank) {
		return session.insert(ns + "insert", rank);
	}
	
	@Override
	public List<Rank> selectBySpotId(int spotId) {
		return session.selectList(ns + "selectBySpotId", spotId);
	}
	
	@Override
	public List<Rank> selectTotalBySpotId(int spotId) {
		return session.selectList(ns + "selectTotalBySpotId", spotId);
	}
	
	@Override
	public List<Rank> selectIfTotalNoneBySpotId(int spotId) {
		return session.selectList(ns + "selectIfTotalNoneBySpotId", spotId);
	}
}
