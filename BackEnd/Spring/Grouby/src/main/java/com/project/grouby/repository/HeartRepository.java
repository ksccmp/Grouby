package com.project.grouby.repository;

import com.project.grouby.dto.Heart;

public interface HeartRepository {
	
	public int insert(Heart heart);
	
	public int delete(Heart heart);
}
