package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.Tag;

public interface TagRepository {
	
	public int insert(Tag tag);
	
	public List<Tag> selectBySpotId(int spotId);
}
