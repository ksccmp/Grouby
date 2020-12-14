package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.Spot;

@Repository
public class SpotRepositoryImpl implements SpotRepository {
	private String ns = "com.project.grouby.spotmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(Spot spot) {
		int res = session.insert(ns + "insert", spot);
		if(res > 0) {
			return spot.getSpotId();
		} else {
			return res;
		}
	}
	
	@Override
	public List<Spot> selectByGroupId(int groupId) {
		return session.selectList(ns + "selectByGroupId", groupId);
	}
}
