package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.Item;

@Repository
public class ItemRepositoryImpl implements ItemRepository {
	
	private String ns = "com.project.grouby.itemmapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(Item item) {
		return session.insert(ns + "insert", item);
	}
		
	@Override
	public List<Item> selectByIds(Item item) {
		return session.selectList(ns + "selectByIds", item);
	}
}
