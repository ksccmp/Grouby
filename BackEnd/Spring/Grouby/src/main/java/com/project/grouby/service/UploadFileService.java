package com.project.grouby.service;

import java.util.List;

import com.project.grouby.dto.UploadFile;

public interface UploadFileService {
	
	public int insert(List<UploadFile> uploadFiles);
	
	public List<UploadFile> selectByItemId(int itemId);
}
