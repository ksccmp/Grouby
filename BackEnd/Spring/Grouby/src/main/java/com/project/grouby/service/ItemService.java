package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.Item;

public interface ItemService {
	
	public int insert(Item item);
	
	public List<Item> selectByIds(Item item);
	
	public int selectItemCount(String userId);
}
