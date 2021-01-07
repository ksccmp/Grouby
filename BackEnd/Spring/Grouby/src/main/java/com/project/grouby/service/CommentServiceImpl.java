package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.Comment;
import com.project.grouby.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	CommentRepository commentRepo;
	
	@Override
	@Transactional
	public int insert(Comment comment) {
		return commentRepo.insert(comment);
	}
	
	@Override
	public List<Comment> selectByItemId(int itemId) {
		return commentRepo.selectByItemId(itemId);
	}
}
