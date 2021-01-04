package com.project.grouby.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.grouby.dto.Item;
import com.project.grouby.service.ItemService;
import com.project.grouby.service.UploadFileService;

@RestController
@CrossOrigin("*")
@RequestMapping("/item")
public class ItemController {
	
	@Autowired
	ItemService itemServ;
	
	@Autowired
	UploadFileService uploadFileServ;
	
	@PostMapping("/regItem")
	public ResponseEntity<Map<String, Object>> regItem(@RequestBody Item item) {
		try {
			int res = itemServ.insert(item);
			
			if(res > 0) {
				return response(item.getItemId(), true, HttpStatus.OK);
			} else {
				return response(res, false, HttpStatus.OK);
			}
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/selectByIds")
	public ResponseEntity<Map<String, Object>> selectByIds(Item item) {
		try {
			List<Item> items = itemServ.selectByIds(item);
			for(int i=0; i<items.size(); i++) {
				Item resItem = items.get(i);
				
				resItem.setUploadFiles(uploadFileServ.selectByItemId(resItem.getItemId()));
			}
			
			return response(items, true, HttpStatus.OK);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	
	public ResponseEntity<Map<String, Object>> response(Object data, boolean success, HttpStatus status) {
		Map<String, Object> resMap = new HashMap<String, Object>();
		resMap.put("data", data);
		resMap.put("success", success);
		
		return new ResponseEntity<Map<String,Object>>(resMap, status);
	}
}
