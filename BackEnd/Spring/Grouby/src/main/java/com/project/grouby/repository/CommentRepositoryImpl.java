package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.Comment;

@Repository
public class CommentRepositoryImpl implements CommentRepository {
	private String ns = "com.project.grouby.commentmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(Comment comment) {
		return session.insert(ns + "insert", comment);
	}
	
	@Override
	public List<Comment> selectByItemId(int itemId) {
		return session.selectList(ns + "selectByItemId", itemId);
	}
}
