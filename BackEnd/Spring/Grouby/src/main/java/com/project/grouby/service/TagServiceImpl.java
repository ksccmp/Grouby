package com.project.grouby.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.Tag;
import com.project.grouby.repository.TagRepository;

@Service
public class TagServiceImpl implements TagService {
	
	@Autowired
	TagRepository tagRepo;
	
	@Override
	@Transactional
	public int insert(Tag tag) {
		return tagRepo.insert(tag);
	}
}
