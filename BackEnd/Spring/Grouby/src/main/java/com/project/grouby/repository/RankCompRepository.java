package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.RankComp;

public interface RankCompRepository {
	public List<RankComp> selectAll();
	
	public List<RankComp> selectAllByGroupId(int groupId);
}
