package com.project.grouby.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Spot {
	private int spotId;
	private int groupId;
	private String spotName;
	private String regId;
	private String regDate;
	private String modDate;
	
	private String groupName;
	private List<SpotRank> spotRanks;
	private List<Tag> tags;
	private List<Rank> ranks;
}
