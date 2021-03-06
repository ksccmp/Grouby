package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Rank;

public interface RankService {
	
	public int insert(List<Rank> ranks);
	
	public List<Rank> selectBySpotId(int spotId);
	
	public List<Rank> selectTotalBySpotId(int spotId);
	
	public List<Rank> selectIfTotalNoneBySpotId(int spotId);
	
	public List<Integer> selectRankIdBySpotId(int spotId);
	
	public List<Rank> selectByRankId(int rankId);
	
	public List<Rank> selectRankComp(int spotId);
	
	public int selectRankCount(String userId);
}
