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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.grouby.dto.RankComp;
import com.project.grouby.dto.Spot;
import com.project.grouby.service.RankCompService;
import com.project.grouby.service.RankService;
import com.project.grouby.service.SpotService;
import com.project.grouby.service.TagService;

@RestController
@CrossOrigin("*")
@RequestMapping("/spot")
public class SpotController {
	
	@Autowired
	SpotService spotServ;
	
	@Autowired
	RankService rankServ;
	
	@Autowired
	RankCompService rankCompServ;
	
	@Autowired
	TagService tagServ;
	
	@PostMapping("/createSpot")
	public ResponseEntity<Map<String, Object>> createSpot(@ResponseBody Spot spot) {
		try {
			int spotId = spotServ.insert(spot);
			
			if(spotId > 0) {
				List<RankComp> rankComps = spot.getRankComps();
				for(int i=0; i<rankComps.size(); i++) {
					RankComp rankComp = rankComps.get(i);
					rankComp.set
				}
			}
			
			return response(0, false, HttpStatus.CONFLICT);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	
	@GetMapping("/selectByGroupId")
	public ResponseEntity<Map<String, Object>> selectByGroupId(@RequestParam int groupId) {
		try {
			List<Spot> spots = spotServ.selectByGroupId(groupId);
			
			for(int i=0; i<spots.size(); i++) {
				Spot spot = spots.get(i);
				
				spot.setRanks(rankServ.selectBySpotId(spot.getSpotId()));
			}
			
			return response(spots, true, HttpStatus.OK);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/selectAllRankComp")
	public ResponseEntity<Map<String, Object>> selectAllRankComp() {
		try {
			return response(rankCompServ.selectAll(), true, HttpStatus.OK);
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
