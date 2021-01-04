package com.project.grouby.dto;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;

import lombok.Data;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UploadFile {
	private int itemId;
	private String fileId;
	private String originName;
	private long fileSize;
	private String fileType;
}
