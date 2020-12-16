package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.RankComp;

public interface RankCompService {
	
	public List<RankComp> selectAll();
	
	public List<RankComp> selectAllByGroupId(int groupId);
}
