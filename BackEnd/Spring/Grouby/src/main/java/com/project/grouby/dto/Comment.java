package com.project.grouby.dto;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;

import lombok.Data;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
	private int commentId;
	private int itemId;
	private String regId;
	private String comments;
	private String regDate;
	private String modDate;
}
