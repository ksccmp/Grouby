package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.Spot;

public interface SpotRepository {
	
	public int insert(Spot spot);
	
	public List<Spot> selectByGroupId(int groupId);
}
