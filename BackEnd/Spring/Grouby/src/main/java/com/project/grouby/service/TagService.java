package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Tag;

public interface TagService {
	
	public int insert(Tag tag);
	
	public List<Tag> selectBySpotId(int spotId);
}
