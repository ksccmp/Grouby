package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.Friend;

public interface FriendRepository {
	
	public int insert(Friend friend);
	
	public List<Friend> selectByUserId(String userId);
	
	public int delete(Friend friend);
}
