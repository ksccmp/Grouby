package com.project.grouby.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.grouby.dto.Friend;
import com.project.grouby.service.FriendService;

@RestController
@CrossOrigin("*")
@RequestMapping("/friend")
public class FriendController {
	
	@Autowired
	FriendService friendServ;
	
	@PostMapping("/insert")
	public ResponseEntity<Map<String, Object>> insert(@RequestBody Friend friend) {
		try {
			return response(friendServ.insert(friend), true, HttpStatus.CREATED);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/selectByUserId")
	public ResponseEntity<Map<String, Object>> selectByUserId(@RequestParam String userId) {
		try {
			return response(friendServ.selectByUserId(userId), true, HttpStatus.OK);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<Map<String, Object>> delete(@RequestBody Friend friend) {
		try {
			return response(friendServ.delete(friend), true, HttpStatus.OK);
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
