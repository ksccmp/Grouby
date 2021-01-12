package com.project.grouby.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChangeRank {
	private String regId;
	private String modDate;
	private List<Rank> ranks;
}
