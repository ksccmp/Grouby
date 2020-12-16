package com.project.grouby.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.SpotRank;
import com.project.grouby.repository.SpotRankRepository;

@Service
public class SpotRankServiceImpl implements SpotRankService {
	
	@Autowired
	SpotRankRepository spotRankRepo;
	
	@Override
	@Transactional
	public int insert(SpotRank spotRank) {
		return spotRankRepo.insert(spotRank);
	}
}
