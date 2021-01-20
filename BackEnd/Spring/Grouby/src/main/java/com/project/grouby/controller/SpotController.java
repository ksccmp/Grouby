package com.project.grouby.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.grouby.dto.ChangeRank;
import com.project.grouby.dto.Rank;
import com.project.grouby.dto.Spot;
import com.project.grouby.dto.SpotRank;
import com.project.grouby.dto.Tag;
import com.project.grouby.service.RankCompService;
import com.project.grouby.service.RankService;
import com.project.grouby.service.SpotRankService;
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
	
	@Autowired
	SpotRankService spotRankServ;
	
	@PostMapping("/createSpot")
	public ResponseEntity<Map<String, Object>> createSpot(@RequestBody Spot spot) {
		try {
			int spotId = spotServ.insert(spot);
			
			if(spotId > 0) {
				int spotRankCount = 0;
				List<SpotRank> spotRanks = spot.getSpotRanks();
				
				for(int i=0; i<spotRanks.size(); i++) {
					SpotRank spotRank = spotRanks.get(i);
					spotRank.setSpotId(spotId);
					
					spotRankCount = spotRankCount + spotRankServ.insert(spotRank);
				}
				
				if(spotRankCount > 0) {
					int tagCount = 0;
					
					List<Tag> tags = spot.getTags();
					for(int i=0; i<tags.size(); i++) {
						Tag tag = tags.get(i);
						tag.setSpotId(spotId);
						
						tagServ.insert(tag);
					}
					
					return response(tagCount, true, HttpStatus.CREATED);
				}
			}
			
			return response(0, false, HttpStatus.OK);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@PostMapping("/createRanks")
	public ResponseEntity<Map<String, Object>> createRanks(@RequestBody List<Rank> ranks) {
		try {
			return response(rankServ.insert(ranks), true, HttpStatus.CREATED);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	
	@GetMapping("/selectSpotByGroupId")
	public ResponseEntity<Map<String, Object>> selectSpotByGroupId(@RequestParam int groupId) {
		try {
			List<Spot> spots = spotServ.selectByGroupId(groupId);
			
			for(int i=0; i<spots.size(); i++) {
				Spot spot = spots.get(i);
				
				List<Rank> ranks = rankServ.selectTotalBySpotId(spot.getSpotId());
				if(ranks.size() == 0) { // 등록된 평가가 없다면 점수가 0인걸로 가져오기
					spot.setRanks(rankServ.selectIfTotalNoneBySpotId(spot.getSpotId()));
				} else { // 등록된 평가가 있을 시
					spot.setRanks(ranks);
				}
				
				spot.setTags(tagServ.selectBySpotId(spot.getSpotId()));
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
	
	@GetMapping("/selectAllRankCompByGroupId")
	public ResponseEntity<Map<String, Object>> selectAllRankCompByGroupId(@RequestParam int groupId) {
		try {
			return response(rankCompServ.selectAllByGroupId(groupId), true, HttpStatus.OK);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/selectRanksBySpotId")
	public ResponseEntity<Map<String, Object>> selectRanksBySpotId(@RequestParam int spotId) {
		try {
			List<Integer> rankIds = rankServ.selectRankIdBySpotId(spotId);
			List<ChangeRank> changeRanks = new ArrayList<ChangeRank>();
			
			for(int i=0; i<rankIds.size(); i++) {
				int rankId = rankIds.get(i);
				
				List<Rank> ranks = rankServ.selectByRankId(rankId);
				ChangeRank changeRank = new ChangeRank(ranks.get(i).getRegId(), ranks.get(i).getModDate(), ranks);
				
				changeRanks.add(changeRank);
			}
			
			return response(changeRanks, true, HttpStatus.OK);
			
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/selectRankComp")
	public ResponseEntity<Map<String, Object>> selectRankComp(@RequestParam int spotId) {
		try {
			return response(rankServ.selectRankComp(spotId), true, HttpStatus.OK);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/selectRankCount")
	public ResponseEntity<Map<String, Object>> selectRankCount(@RequestParam String userId) {
		try {
			return response(rankServ.selectRankCount(userId), true, HttpStatus.OK);
		} catch(RuntimeException e) {
			return response(e.getMessage(), false, HttpStatus.CONFLICT);
		}
	}
	
	@PutMapping("/updateSpotName")
	public ResponseEntity<Map<String, Object>> updateSpotName(@RequestBody Spot spot) {
		try {
			return response(spotServ.updateSpotName(spot), true, HttpStatus.OK);
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
