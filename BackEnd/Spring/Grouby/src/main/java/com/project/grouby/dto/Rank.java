package com.project.grouby.dto;

import lombok.Data;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Rank {
	private int spotId;
	private String regId;
	private int rankCompId;
	private int rankScore;
	private String regDate;
	private String modDate;
	
	private String rankCompName;
}
