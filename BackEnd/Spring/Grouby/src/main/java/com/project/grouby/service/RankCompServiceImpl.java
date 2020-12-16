package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.grouby.dto.RankComp;
import com.project.grouby.repository.RankCompRepository;

@Service
public class RankCompServiceImpl implements RankCompService {
	
	@Autowired
	RankCompRepository rankCompRepo;
	
	@Override
	public List<RankComp> selectAll() {
		return rankCompRepo.selectAll();
	}
	
	@Override
	public List<RankComp> selectAllByGroupId(int groupId) {
		return rankCompRepo.selectAllByGroupId(groupId);
	}
}
