package com.project.grouby.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SpotRank {
	private int spotId;
	private int rankCompId;
	private String regId;
	private String regDate;
	private String modDate;
}
