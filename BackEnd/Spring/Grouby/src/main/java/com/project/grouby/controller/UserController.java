package com.project.grouby.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.grouby.dto.User;
import com.project.grouby.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userServ;
	
	@PostMapping("/insert")
	public ResponseEntity<Map<String, Object>> insert(@RequestBody User user) {
		try {
			User overlapUser = userServ.selectByUserId(user.getUserId());
			if(overlapUser == null) { // 아이디 중복 체크
				return response(userServ.insert(user), true, HttpStatus.CREATED);
			} else {
				return response(0, false, HttpStatus.OK);
			}
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/selectByUserId")
	public ResponseEntity<Map<String, Object>> selectByUserId(@RequestParam String userId, @RequestParam String userPassword) {
		try {
			User user = userServ.selectByUserId(userId);
			
			if(user == null) { // 아이디가 존재하지 않을 경우
				return response(null, false, HttpStatus.OK);
			} else if(userPassword.equals(user.getUserPassword())) { // 아이디가 존재하고 비밀번호가 같을 경우
				return response(user, true, HttpStatus.OK);
			} else { // 아이디는 존재하지만 비밀번호가 다를 경우
				return response(null, false, HttpStatus.OK);
			}
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
