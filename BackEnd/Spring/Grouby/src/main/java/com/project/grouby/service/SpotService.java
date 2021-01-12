package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Spot;

public interface SpotService {
	
	public int insert(Spot spot);
	
	public List<Spot> selectByGroupId(int groupId);
	
	public int updateSpotName(Spot spot);
}
