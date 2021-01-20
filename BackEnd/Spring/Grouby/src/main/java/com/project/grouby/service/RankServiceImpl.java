package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.grouby.dto.Rank;
import com.project.grouby.repository.RankRepository;

@Service
public class RankServiceImpl implements RankService {
	
	@Autowired
	RankRepository rankRepo;
	
	@Override
	public int insert(List<Rank> ranks) {
		int res = 0;
		
		int rankId = rankRepo.selectMaxRankId();
		
		for(int i=0; i<ranks.size(); i++) {
			Rank rank = ranks.get(i);
			rank.setRankId(rankId);;
			
			res = res + rankRepo.insert(rank);
		}
		
		return res;
	}
	
	@Override
	public List<Rank> selectBySpotId(int spotId) {
		return rankRepo.selectBySpotId(spotId);
	}
	
	@Override
	public List<Rank> selectTotalBySpotId(int spotId) {
		return rankRepo.selectTotalBySpotId(spotId);
	}
	
	@Override
	public List<Rank> selectIfTotalNoneBySpotId(int spotId) {
		return rankRepo.selectIfTotalNoneBySpotId(spotId);
	}
	
	@Override
	public List<Integer> selectRankIdBySpotId(int spotId) {
		return rankRepo.selectRankIdBySpotId(spotId);
	}
	
	@Override
	public List<Rank> selectByRankId(int rankId) {
		return rankRepo.selectByRankId(rankId);
	}
	
	@Override
	public List<Rank> selectRankComp(int spotId) {
		return rankRepo.selectRankComp(spotId);
	}
	
	@Override
	public int selectRankCount(String userId) {
		return rankRepo.selectRankCount(userId);
	}
}
