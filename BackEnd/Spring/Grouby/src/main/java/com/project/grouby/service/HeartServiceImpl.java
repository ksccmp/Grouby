package com.project.grouby.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.Heart;
import com.project.grouby.repository.HeartRepository;

@Service
public class HeartServiceImpl implements HeartService {
	
	@Autowired
	HeartRepository heartRepo;
	
	@Override
	@Transactional
	public int insert(Heart heart) {
		return heartRepo.insert(heart);
	}
	
	@Override
	@Transactional
	public int delete(Heart heart) {
		return heartRepo.delete(heart);
	}
}
