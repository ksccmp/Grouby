package com.project.grouby.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RankComp {
	private int rankCompId;
	private String rankCompName;
	private String regDate;
	private String modDate;
	
	private int rankCompOrder;
	private boolean rankCompSelect;
}
