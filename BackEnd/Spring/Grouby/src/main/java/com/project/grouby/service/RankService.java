package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Rank;

public interface RankService {
	
	public int insert(Rank rank);
	
	public List<Rank> selectBySpotId(int spotId);
}
