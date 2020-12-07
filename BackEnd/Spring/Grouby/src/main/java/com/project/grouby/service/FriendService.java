package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Friend;

public interface FriendService {
	
	public int insert(Friend friend);
	
	public List<Friend> selectByUserId(String userId);
	
	public int delete(Friend friend);
}
