package com.project.grouby.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Friend {
	private String userId;
	private String friendId;
	private String regDate;
}
