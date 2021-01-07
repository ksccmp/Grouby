package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Comment;

public interface CommentService {
	
	public int insert(Comment comment);
	
	public List<Comment> selectByItemId(int itemId);
}
