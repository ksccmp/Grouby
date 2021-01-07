package com.project.grouby.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item {
	private int itemId;
	private int groupId;
	private int spotId;
	private String regId;
	private String contents;
	private String regDate;
	private String modDate;
	
	private List<UploadFile> uploadFiles;
	private int heart;
	private boolean heartPress;
	private int comment;
}
