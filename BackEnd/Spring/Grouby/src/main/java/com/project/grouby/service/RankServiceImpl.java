package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.Rank;
import com.project.grouby.repository.RankRepository;

@Service
public class RankServiceImpl implements RankService {
	
	@Autowired
	RankRepository rankRepo;
	
	@Override
	@Transactional
	public int insert(Rank rank) {
		return rankRepo.insert(rank);
	}
	
	@Override
	public List<Rank> selectBySpotId(int spotId) {
		return rankRepo.selectBySpotId(spotId);
	}
}
