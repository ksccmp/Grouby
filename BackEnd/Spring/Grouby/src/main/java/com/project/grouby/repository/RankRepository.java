package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.Rank;

public interface RankRepository {
	
	public int insert(Rank rank);
	
	public List<Rank> selectBySpotId(int spotId);
	
	public List<Rank> selectTotalBySpotId(int spotId);
	
	public List<Rank> selectIfTotalNoneBySpotId(int spotId);
}
