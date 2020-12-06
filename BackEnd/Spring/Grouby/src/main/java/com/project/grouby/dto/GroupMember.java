package com.project.grouby.dto;

import lombok.Data;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class GroupMember {
	private int groupId;
	private String userId;
	private String regDate;
}
