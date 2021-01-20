package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.Item;

public interface ItemRepository {
	
	public int insert(Item item);
	
	public List<Item> selectByIds(Item item);
	
	public int selectItemCount(String userId);
}
