package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.Item;
import com.project.grouby.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	ItemRepository itemRepo;
	
	@Override
	@Transactional
	public int insert(Item item) {
		return itemRepo.insert(item);
	}
	
	@Override
	public List<Item> selectByIds(Item item) {
		return itemRepo.selectByIds(item);
	}
}
