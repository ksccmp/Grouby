package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.Spot;
import com.project.grouby.repository.SpotRepository;

@Service
public class SpotServiceImpl implements SpotService {
	
	@Autowired
	SpotRepository spotRepo;
	
	@Override
	@Transactional
	public int insert(Spot spot) {
		return spotRepo.insert(spot);
	}
	
	@Override
	public List<Spot> selectByGroupId(int groupId) {
		return spotRepo.selectByGroupId(groupId);
	}
}
