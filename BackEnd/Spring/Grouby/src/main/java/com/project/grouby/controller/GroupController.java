package com.project.grouby.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.grouby.dto.Group;
import com.project.grouby.service.GroupMemberService;
import com.project.grouby.service.GroupService;

@RestController
@CrossOrigin("*")
@RequestMapping("/group")
public class GroupController {
	
	@Autowired
	GroupService groupServ;
	
	@Autowired
	GroupMemberService groupMemberServ;
	
	@GetMapping("/selectGroups")
	public ResponseEntity<Map<String, Object>> selectGroups(@RequestParam String userId) {
		try {
			List<Group> groupList = groupServ.selectByUserId(userId);
			for(int i=0; i<groupList.size(); i++) {
				Group group = groupList.get(i);
				group.setGroupMembers(groupMemberServ.selectByGroupId(group.getGroupId()));
			}
			
			return response(groupList, true, HttpStatus.OK);
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
