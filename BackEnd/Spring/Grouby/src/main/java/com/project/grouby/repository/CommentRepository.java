package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.Comment;

public interface CommentRepository {
	
	public int insert(Comment comment);
	
	public List<Comment> selectByItemId(int itemId);
}
